import React from "react";
import { GET_BRANDS } from "./graphql/query";
import { useQuery } from "@apollo/client";

export default function ProductList() {
    const { loading, error, data } = useQuery(GET_BRANDS);
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            {data &&
                data.allBrands.map((brand: any) => (
                    <div key={brand.name}>{brand.name}</div>
                ))}
            <div>ProductList</div>
        </>
    );
}
