import React from 'react'
import { useApp } from '../context/AppContext'

const Filter = () => {
  const { updateNumberOfCols, updatePageSize, setAdPosition, adPosition, pageSize, numOfCols } = useApp();

  return (
    <div className="w-full p-5 bg-white">

      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">
        Filters
        </p>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
        Reset Filter
        </button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 mt-4">
          <select value={numOfCols} onChange={(e) => updateNumberOfCols(e.target.value)} className="hidden lg:flex px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="">Number of Cols</option>
            {Array.from(Array(8).keys()).map((item, index) => (
              <option key={index} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
          <select value={pageSize} onChange={(e) => updatePageSize(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value="6">Page Size</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
          <select value={adPosition} onChange={(e) => setAdPosition(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
            <option value={adPosition}>Ad Position</option>
            <option value="top">Top</option>
            <option value="middle">Middle</option> 
            <option value="bottom">Bottom</option>
          </select>

        </div>
      </div>
  </div>
  )
}

export default Filter