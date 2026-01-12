import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

function initDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL must be set. Did you forget to provision a database?",
    );
  }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });
  return { pool, db };
}

let _pool: pg.Pool | undefined;
let _db: ReturnType<typeof drizzle> | undefined;

// Direct exports that initialize once on first access
// Avoids Proxy overhead on every property access
export const pool: pg.Pool = new Proxy({} as pg.Pool, {
  get(_target, prop) {
    if (!_pool) {
      const result = initDb();
      _pool = result.pool;
      _db = result.db;
    }
    return Reflect.get(_pool, prop);
  }
});

export const db: ReturnType<typeof drizzle> = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    if (!_db) {
      const result = initDb();
      _pool = result.pool;
      _db = result.db;
    }
    return Reflect.get(_db, prop);
  }
});
