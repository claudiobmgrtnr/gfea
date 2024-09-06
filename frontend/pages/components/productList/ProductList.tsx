import React from "react";
import { GET_PRODUCTS } from "./graphql/query";
import { useQuery } from "@apollo/client";
import styles from "./productList.module.css";
import ProductTile from "../productTile/ProductTile";

export default function ProductList() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    return (
        <section className={styles.productList}>
            <div className={styles.topBar}>
                <h1 className={styles.title}>Hot new products</h1>
            </div>
            <div className={styles.listWrapper}>
                {loading && <p>Loading...</p>}
                {error && <p>Error :(</p>}
                {data &&
                    data.allProducts.map((product: any) => (
                        <ProductTile
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            insteadOfPrice={product.insteadOfPrice}
                            rating={product.rating}
                            description={product.description}
                            category={product.category}
                            brandName={product.Brand.name}
                        />
                    ))}
            </div>
        </section>
    );
}
