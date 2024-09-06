import React, { ReactNode } from "react";
import styles from "./main.module.css";
type Props = {
    children: ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.inner}>{children}</div>
        </main>
    );
};
