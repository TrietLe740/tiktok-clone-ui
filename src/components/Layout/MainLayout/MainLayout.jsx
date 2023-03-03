import React from "react";
import Header from "~/components/Layout/components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
