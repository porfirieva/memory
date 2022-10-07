import React from "react";
import styles from "./layout.scss";

const Layout = ({ header, children }) => {
  return (
    <div className={styles.layout}>
      <main className="container">{children}</main>
      {/* {header} */}
    </div>
  );
};

export default Layout;

