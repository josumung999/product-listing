import { createContext, useContext, ReactNode, useState, SetStateAction } from "react";

type appContextType = {
  numOfCols: string,
  pageSize: number,
  page: number,
  updateNumberOfCols: (num: string) => void,
  updatePageSize: (size: string) => void,
  setPage: (page: any) => void,
  // filter: {},
  // resetFilter: () => void,
  // filterResult: () => void,
}

const appContextDefaultValue: appContextType = {
  numOfCols: ``,
  pageSize: 5,
  page: 0,
  updateNumberOfCols: () => {},
  updatePageSize: () => {},
  setPage: () => {}
  // filter: {},
  // resetFilter: () => {},
  // filterResult: () => {},
}

const AppContext = createContext<appContextType>(appContextDefaultValue);

export function useApp() {
  return useContext(AppContext)
}

type props = {
  children: ReactNode
}

export function AppProvider({ children }: props) {
  const [numOfCols, setNumOfCols] = useState<string>(`grid-cols-2`);
  // const [filter, setFilter] = useState<any>({
  //   brand: '',
  //   priceOrder: "",
  //   searchTerm: ""
  // })

  const [pageSize, setPageSize] = useState<number>(5)
  const [page, setPage] = useState<number>(0);

  const updateNumberOfCols = (num: string) => {
    setNumOfCols(`grid-cols-${num}`)
  }

  const updatePageSize = (size: string) => {
    setPageSize(parseInt(size))
  }
  

  // const resetFilter = () => {
  //   setFilter({
  //     brand: '',
  //     priceOrder: "",
  //     searchTerm: ""
  //   })
  // }

  // const filterResult = ({ brandName, pricing, searchQuery }: any) => {
  //   setFilter({
  //     brand: brandName,
  //     priceOrder: pricing,
  //     searchTerm: searchQuery
  //   })
  // }

  const value = {
    numOfCols,
    pageSize,
    page,
    // filter,
    updateNumberOfCols,
    updatePageSize,
    setPage,
    // filterResult,
    // resetFilter
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}