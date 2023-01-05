import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../context/AppContext'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://demo.vendure.io/shop-api",
    cache: new InMemoryCache(),
    ssrMode: true
  })

  const { data } = await client.query({
    query: gql`
      query {
        products(options: {skip: 0, take: 10}) {
          totalItems
          items {
            id
            name
            slug
            featuredAsset {
              id
              width
              height
              source
            }
          }
        }
      }
    `
  })

  return {
    props: {
      products: data.products.items,
      totalItems: data.products.totalItems
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
