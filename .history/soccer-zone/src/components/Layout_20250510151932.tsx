import React, { ReactNode } from "react";

interface LayoutProps {
  navbar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ navbar, footer, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {navbar && <header>{navbar}</header>}
      <main className="flex-grow">{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Layout;
