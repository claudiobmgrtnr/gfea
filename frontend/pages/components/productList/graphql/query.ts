import { gql } from "@apollo/client";

export const GET_BRANDS = gql`
    query GetBrands {
        allBrands {
            name
        }
    }
`;
