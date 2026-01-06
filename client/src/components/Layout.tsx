import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, memo } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layoutStyle = { minHeight: "100vh", display: "flex", flexDirection: "column" } as const;
const mainStyle = { flex: 1 } as const;

export const Layout = memo(function Layout({ children }: LayoutProps) {
  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainStyle}>
        {children}
      </main>
      <Footer />
    </div>
  );
});
