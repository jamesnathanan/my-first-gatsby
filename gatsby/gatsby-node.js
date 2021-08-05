import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. query all pizza
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    // do so,e work with data
    // console.log('creating a page for ', pizza.name);
    actions.createPage({
      // what is the url for this new pages ?
      path: `/pizza/${[pizza.slug.current]}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Creates page dynamically
  // 1. Pizzas
  await turnPizzasIntoPages(params);
  // 2. Toppings
  // 3. Slicemasters
}
