import { FC } from "react";
import styles from "./rating.module.css";
import RatingStarCss from "../ratingStar/RatingStarCss";

export interface ratingProps {
    rating: number;
    ratingCount: number;
}

const Rating: FC<ratingProps> = ({ rating, ratingCount }) => {
    // possible challenge: Write a function that calculates and returns data for the stars
    const calcStars = (rating: number) => {
        let roundedRating = Math.round(rating * 2) / 2;
        const ratingStarFills: Array<"full" | "empty" | "half"> = [];
        let rest = 5;

        while (rest > 0) {
            if (roundedRating >= 1) {
                ratingStarFills.push("full");
            }
            if (roundedRating === 0.5) {
                ratingStarFills.push("half");
            }
            if (roundedRating < 0.5) {
                ratingStarFills.push("empty");
            }
            roundedRating--;
            rest--;
        }
        return ratingStarFills;
    };

    return (
        <div className={styles.rating}>
            {calcStars(rating).map((fill, index) => (
                <RatingStarCss fill={fill} key={index} />
            ))}
            <span className={styles.ratingCount}>{ratingCount}</span>
        </div>
    );
};

export default Rating;
