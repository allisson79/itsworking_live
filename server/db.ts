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

function ensureDb() {
  if (!_db || !_pool) {
    const result = initDb();
    _pool = result.pool;
    _db = result.db;
  }
  return { pool: _pool, db: _db };
}

// Simplified getters that call ensureDb once, avoiding Proxy overhead
export function getPool(): pg.Pool {
  return ensureDb().pool;
}

export function getDb(): ReturnType<typeof drizzle> {
  return ensureDb().db;
}

// Export instances that initialize on first access
// This is more efficient than using Proxy on every property access
export const pool = new Proxy({} as pg.Pool, {
  get(_target, prop) {
    return Reflect.get(getPool(), prop);
  }
});

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    return Reflect.get(getDb(), prop);
  }
});
