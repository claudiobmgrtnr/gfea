import React, { FC } from "react";
import styles from "./ratingStar.module.css";
import star_full_galaxus from "./star_full_galaxus.svg"
import Image from "next/image";

export interface RatingStarProps{
    flavour?: "css" | "svg"
    fill: "half" | "full" | "empty"
};

const RatingStar: FC<RatingStarProps> = ({ flavour = "css", fill }) => {
    if(flavour === "svg"){
        return <div> <Image
        priority
        src={star_full_galaxus}
        alt="Follow us on Twitter"
      /> | {fill}</div>;
    }

    return (<div
        className={`${styles[fill]} ${styles.star}`}></div>
    );
}

export default RatingStar;