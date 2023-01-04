import React from "react"
import Head from 'next/head'
import Filter from '../components/Filter'
import Pager from '../components/Pager'
import ProductGrid from '../components/ProductGrid'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const Home: React.FC<{ products: any }> = ({products}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
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
        <Pager />
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


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://product-listing-drab.vercel.app/api/products",
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          id
          name
          imageSrc
          price
          brand
        }
      }
    `
  })

  return {
    props: {
      products: data.products
    }
  }
}
