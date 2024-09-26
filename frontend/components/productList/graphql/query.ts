import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts {
  allProducts {
    id
    name
    imageUrl
    price
    insteadOfPrice
    description
    category
    brand_id
    Brand {
      name
      id
    }
  }
}
`;
