import { ReactNode } from "react";
import Navbar from "../components/";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="max-w-[480px] mx-auto min-h-screen bg-white relative">
    <main className="pb-20 p-4">{children}</main>
    <Navbar />
  </div>
);

export default Layout;