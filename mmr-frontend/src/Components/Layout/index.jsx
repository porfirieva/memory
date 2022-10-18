import React from "react";
import "./layout.scss";

const Layout = ({ header, children }) => {
  return (
    <div className="app-wrapper">
      <main className="app-content">{children}</main>
      {header}
    </div>
  );
};

export default Layout;

