import { Key } from "react";
import { useApp } from "../context/AppContext"
import AdBanner from "./AdBanner";

const  ProductGrid: React.FC<{ products: any }> = ({ products }) => {
  const { numOfCols } = useApp();

  const isEmpty = products.length == 0 ? true : false

  return (
    <div className="bg-white">
      <div className="py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Products</h2>

        <div>
          {isEmpty ? <p>Nothing to show</p>: (
            <>
              <div 
                className={`mt-6 grid ${numOfCols} gap-y-10 gap-x-6 xl:gap-x-8`}
              >
                {products.map((product: { 
                  name: string; 
                  featuredAsset: any,
                  }, index: Key | null | undefined) => (
                  <div key={index} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={`${product.featuredAsset ? product.featuredAsset.source : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"}`}
                        alt=""
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Adidas</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$ 32</p>
                    </div>
                  </div>
                ))}
              </div>
              <AdBanner />
            </>
          )}


        </div>

      </div>
    </div>
  )
}



export default ProductGrid