'use client';

import { ReactNode } from "react";
import KambazNavigation from "./Navigation/Navigation";
import styles from "./styles.module.css";
import store from "./store";
import { Provider } from "react-redux";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div id={styles["wd-kambaz"]}>
        <div className="d-flex">
        <div>
          <KambazNavigation />
        </div>
        <div className={`flex-fill p-3 ${styles["wd-main-content-offset"]}`}>
          {children}
        </div>
      </div>
    </div>
    </Provider>
  );
}
