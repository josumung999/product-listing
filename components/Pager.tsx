import React from 'react'
import { useApp } from '../context/AppContext'

const Pager: React.FC<{ totalItems: number }> = ({ totalItems }) => {
  const { pageSize, setPage, page } = useApp();
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button disabled={!page} onClick={(e) => setPage((prev: number) => prev - 1)} className="relative inline-flex items-center rounded-md border disabled:bg-gray-300 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
        <button onClick={(e) => setPage((prev: number) => prev + 1)} className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
      </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing{" "}
        <span className="font-medium">1</span>{" "}
        to{" "}
        <span className="font-medium">
          {pageSize}
        </span>{" "}
        of{" "}
        <span className="font-medium">
          {totalItems}
        </span>{" "}
        results
      </p>
    </div>
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button disabled={!page} onClick={(e) => setPage((prev: number) => prev - 1)} className="relative inline-flex items-center rounded-l-md border disabled:bg-gray-300 border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Previous</span>
          {/* <!-- Heroicon name: mini/chevron-left --> */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
        {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
        <button className="relative z-10 inline-flex items-center px-8 py-2 text-sm font-medium bg-white text-gray-500 border-none">Page {page + 1}</button>
        <button onClick={(e) => setPage((prev: number) => prev + 1)} className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Next</span>
          {/* <!-- Heroicon name: mini/chevron-right --> */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>
  )
}

export default Pager