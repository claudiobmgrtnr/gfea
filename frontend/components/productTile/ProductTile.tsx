import React from "react";
import styles from "./productTile.module.css";
import Rating from "../rating/Rating";
import { product } from "../productList/ProductList";

const ProductTile: React.FC<Omit<product, "id" | "Brand">> = ({
    name,
    imageUrl,
    price,
    insteadOfPrice,
    description,
    category,
    brandName,
}) => {

    const normalizePrice = (price: number) => {
        if (price % 1 === 0) {
            return `${price}.–`;
        }
        return `${price}0`;
    };

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
                    {normalizePrice(price)}
                    {insteadOfPrice && (
                        <span className={styles.insteadOfPrice}>
                            was {normalizePrice(insteadOfPrice)}
                        </span>
                    )}
                </p>
                <p className={styles.brandName}>
                    {brandName}
                    <span className={styles.productName}> {name}</span>
                </p>
                <p className={styles.description}>{description}</p>
            </article>
        </div>
    );
};

export default ProductTile;
