import React from "react";
import styles from "./header.module.css";
export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.topBar}></div>
            <div className={styles.logoWrapper}>
                <svg
                    fill="none"
                    viewBox="0 0 597 100"
                    width="597"
                    className={styles.logo}>
                    <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M160.406 76.16c-12.544 0-21.842-9.91-21.842-21.753s9.298-21.756 21.669-21.756c10.436 0 16.228 6.844 16.228 6.844l6.928-7.544s-7.456-9.3-23.156-9.3c-17.983 0-32.371 13.596-32.371 31.756 0 18.156 14.388 31.753 32.544 31.753 14.913 0 23.597-6.58 23.597-6.58V50.547h-24.562v9.824h14.213v13.07s-4.476 2.72-13.248 2.72m40.965 8.949h11.228l5.176-14.123h25.791l5.174 14.123h11.403l-23.421-61.404h-11.93zm29.3-49.21 9.211 25.348h-18.421zm49.286 49.21h36.842V75.107h-26.316V23.705h-10.526zm51.73 0h11.226l5.176-14.123h25.789l5.177 14.123h11.404l-23.423-61.404h-11.93zm29.298-49.21 9.211 25.348h-18.421zm84.69 49.21h12.456l-19.912-31.667 18.949-29.737h-12.02L431.99 45.37l-13.157-21.665h-12.457l18.95 29.56-19.913 31.844h12.018l14.121-23.423zm72.403-23.597c0 8.77-4.472 14.648-13.158 14.648-8.772 0-13.158-5.877-13.158-14.648V23.705h-10.526v39.123c0 13.509 8.686 23.332 23.684 23.332 15.002 0 23.686-9.823 23.686-23.332V23.705h-10.528zm66.176 7.281c0 4.735-4.913 7.367-10.353 7.367-9.033 0-11.577-9.034-11.577-9.034l-9.388 4.21s3.07 14.824 20.965 14.824c13.07 0 21.053-7.369 21.053-17.367 0-11.404-8.157-15.263-17.544-18.95-8.421-3.33-12.542-5.173-12.542-10.087 0-3.858 3.596-7.105 9.559-7.105 8.334 0 11.142 8.246 11.142 8.246l9.297-4.211s-3.683-14.035-20.439-14.035c-13.068 0-20.263 8.072-20.263 17.105 0 10.877 9.211 15.88 18.421 19.21 7.283 2.632 11.669 4.825 11.669 9.827M51.612 12.817c-.42 1.07-.865 2.2-.865 3.04 0 1.012.297 1.896.596 2.787.177.527.354 1.055.472 1.614.099.454-.057.719-.322 1.17-.169.289-.383.654-.604 1.193a4 4 0 0 0-.32-.077 30.52 30.52 0 0 0-18.712.007l-.095.022a3 3 0 0 0-.208.053 8.5 8.5 0 0 0-.603-1.197c-.258-.441-.41-.7-.315-1.148.118-.55.294-1.072.469-1.592.302-.896.601-1.787.601-2.801 0-.847-.446-1.98-.869-3.05-.378-.96-.738-1.87-.738-2.482 0-.794 1.592-1.916 3.246-3.083 1.05-.74 2.126-1.499 2.837-2.203.658-.647 1.306-1.48 1.93-2.283C39.235 1.345 40.282 0 41.173 0h.162c.884.05 1.917 1.371 3.022 2.786.62.792 1.262 1.614 1.913 2.258.71.7 1.781 1.456 2.827 2.194 1.658 1.17 3.254 2.296 3.254 3.09 0 .612-.36 1.526-.738 2.489m-39.169 27.34c1.816-4 4.37-7.566 7.477-10.496C13.19 24.05 1.69 23.6.627 24.303c-1.284.848-1.138 14.872 5.735 14.722 2.327-.055 4.41.392 6.081 1.131m5.639 42.011c-.674 6.544-14.828 5.344-15.534 4.021-.661-1.243.762-13.908 9.578-18.303a33.6 33.6 0 0 0 6.884 10.335c-.442 1.018-.758 2.31-.928 3.947M70.327 67.89a33.6 33.6 0 0 1-6.886 10.334c.442 1.017.76 2.309.927 3.947.673 6.54 15.124 5.628 15.83 4.309.664-1.247-1.025-14.165-9.87-18.59M41.484 87.697c-1.87 0-3.706-.178-5.485-.504-.016 5.925 4.11 11.118 10.035 12.125 2.551.433 4.964-.172 7.163-1.213a1.4 1.4 0 0 0-.341.016c-.126.017-.251.033-.378.01-5.182-.882-6.958-5.438-6.472-10.771-1.48.219-2.987.337-4.523.337m24.284-45.408c-1.556-3.566-3.748-6.706-6.518-9.336-4.461-4.25-9.972-6.753-15.931-7.24a25 25 0 0 0-2.092-.097c-.635 0-1.317.031-2.093.096-5.956.488-11.466 2.991-15.931 7.24-2.763 2.627-4.958 5.767-6.523 9.337a30 30 0 0 0-2.516 12.1c0 4.04.78 7.953 2.318 11.637a29 29 0 0 0 5.568 8.646c3.928 4.195 8.888 6.97 14.346 8.021 1.628.307 3.256.465 4.831.465.565 0 1.181-.023 1.94-.08 6.5-.494 12.618-3.478 17.234-8.406a28.9 28.9 0 0 0 5.57-8.646A30.1 30.1 0 0 0 68.29 54.39c0-4.218-.844-8.288-2.521-12.1m-3.234-12.633c6.728-5.607 18.227-6.054 19.29-5.354 1.288.849 1.142 14.875-5.733 14.724-2.325-.056-4.406.391-6.085 1.13a33.45 33.45 0 0 0-7.472-10.5"
                        clipRule="evenodd"></path>
                </svg>
            </div>
        </div>
    );
}
