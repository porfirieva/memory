import React from "react";
import styles from "./styles.module.css";

const Layout = ({ header, children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
