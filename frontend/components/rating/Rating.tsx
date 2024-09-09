import { FC } from "react";
import styles from "./rating.module.css";

export interface ratingProps {
    rating: number;
}

const Rating: FC<ratingProps> = ({ rating }) => {
    const calcStars = (rating: number) => {
        let roundedRating = Math.round(rating * 2) / 2;
        const ratingStars = [];
        let rest = 5;

        while (rest > 0) {
            if (roundedRating >= 1) {
                ratingStars.push("full");
            }
            if (roundedRating === 0.5) {
                ratingStars.push("half");
            }
            if (roundedRating < 0.5) {
                ratingStars.push("empty");
            }
            roundedRating--;
            rest--;
        }
        return ratingStars;
    };

    return (
        <div>
            {calcStars(rating).map((star, index) => (
                <div key={index} className={styles[star]}></div>
            ))}
        </div>
    );
};

export default Rating;
