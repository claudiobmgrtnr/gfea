import React from "react";
import styles from "./productTile.module.css";
import Rating from "../rating/Rating";
import { product } from "../productList/ProductList";

// possible challenge: explain Omit
const ProductTile: React.FC<Omit<product, "id" | "Brand">> = ({
    name,
    imageUrl,
    price,
    insteadOfPrice,
    rating,
    ratingCount,
    description,
    category,
    brandName,
}) => {
    return (
        <div className={styles.productTileWrapper}>
            <article className={styles.productTile}>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.img}
                        src={imageUrl}
                        alt={`${brandName}-${name}`}
                    />
                </div>
                <p className={styles.category}>{category}</p>
                <p className={styles.price}>
                    {price}
                    {insteadOfPrice && (
                        <span className={styles.insteadOfPrice}>
                            was {insteadOfPrice}
                        </span>
                    )}
                </p>
                <p className={styles.brandName}>
                    {brandName}
                    <span className={styles.productName}> {name}</span>
                </p>
                <p className={styles.description}>{description}</p>

                <Rating rating={rating} ratingCount={ratingCount} />
            </article>
        </div>
    );
};

export default ProductTile;
