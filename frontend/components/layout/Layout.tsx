import localFont from "next/font/local";
import React, { ReactNode } from "react";
import styles from "./layout.module.css";

const galactica = localFont({
    src: "../../public/fonts/galactica-2024-07-26.woff2",
});

type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={`${galactica.className} ${styles.layout}`}>
            <header>{/* Global header */}</header>
            {children}
            <footer>{/* Global footer */}</footer>
        </div>
    );
};
