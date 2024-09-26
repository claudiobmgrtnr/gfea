import { FC } from "react";
import styles from "./rating.module.css";

export interface ratingProps {
    rating: number;
    ratingCount: number;
}

const Rating: FC<ratingProps> = ({ rating, ratingCount }) => {
    return <div className={styles.rating}></div>;
};

export default Rating;
