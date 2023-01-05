import React from "react"
import Head from 'next/head'
import Filter from '../components/Filter'
import Pager from '../components/Pager'
import ProductGrid from '../components/ProductGrid'
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://demo.vendure.io/shop-api",
  cache: new InMemoryCache()
})


const LIST_PRODUCTS =     gql`
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
        variants {
          id
          priceWithTax
        }
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(LIST_PRODUCTS, { client });

  if (loading) {
    return <div className="px-4 py-4 sm:px-6 lg:px-8">Loading ...</div>
  }
  

  if (error) {
    return (
      <div className="px-4 py-4 sm:px-6 lg:px-8">
        {error.message}
      </div>
    )
  }

  const products = data.products.items;
  const totalItems = data.products.totalItems;
  
  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8">
      <Head>
        <title>Product Listing Next.js Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Product{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Listing
          </a>
        </h1>

        <p className="mt-3 text-base md:text-lg lg:text-2xl">
          A Product Listing Page built with Next.js, Tailwind.css and Apollo GraphQL 
        </p>

      </header>
      <main>
        <Filter />
        <ProductGrid products={products} />
        <Pager totalItems={totalItems} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/josumung999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by @Josué-Munganga
          
        </a>
      </footer>
    </div>
  )
}

export default Home