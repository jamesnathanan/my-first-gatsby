import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage() {
  return <p>Single Pizza</p>;
}
// this need to be dynamic based on the slug passed on via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
