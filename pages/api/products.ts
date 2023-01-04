import { ApolloServer, gql } from "apollo-server-micro";
import { PageConfig } from "next";
import Cors from 'micro-cors'


export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();



const mocks = {
  Query: () => ({
    products: () => [...new Array(12)]
  }),
  Product: () => ({
    id: () => 'product_01',
    name: () => 'Basic Tee',
    imageSrc: () =>
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: () => '$35',
    brand: () => 'Adidas'
  })
};

const typeDefs = gql`
  type Product {
    id: String
    name: String
    imageSrc: String
    price: String
    brand: String
  }
  type Query {
    products: [Product!]!
  }
`;


const server = new ApolloServer({ typeDefs, mocks });

const startServer = server.start()

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  server.createHandler({ path: "/api/products" })(req, res);
})