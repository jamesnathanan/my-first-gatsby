import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasinToppings(pizzas) {
  // return the pizzass with count
  // console.log(pizzas);
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        console.log('Existed: ', existingTopping.name);
        // if it is, increment by 1
        existingTopping.count += 1;
        console.log('1 added:  ', existingTopping.count);
      } else {
        console.log('New one ! : ', topping.name);
        // otherwise, create new entry in acc and set to 1
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them base on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter() {
  // get the list of all the toppings
  // get the list of all the pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();
  //   console.log({ toppings, pizzas });
  // count how many pizzas are in each toppings
  const toppingsWithCounts = countPizzasinToppings(pizzas.nodes);
  console.log(toppingsWithCounts);
  // loop over the list of toppings and display the topping and the count of pizzas in that toppings

  // Link it up ...
  return (
    <ToppingsStyles>
      {toppingsWithCounts.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name} </span>
          <span className="count">{topping.count}, </span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
