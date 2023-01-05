import { createContext, useContext, ReactNode, useState, SetStateAction } from "react";

type appContextType = {
  numOfCols: string,
  pageSize: number,
  page: number,
  updateNumberOfCols: (num: string) => void,
  updatePageSize: (size: string) => void,
  setPage: (page: any) => void,
}

const appContextDefaultValue: appContextType = {
  numOfCols: ``,
  pageSize: 5,
  page: 0,
  updateNumberOfCols: () => {},
  updatePageSize: () => {},
  setPage: () => {}
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

  const [pageSize, setPageSize] = useState<number>(5)
  const [page, setPage] = useState<number>(0);

  const updateNumberOfCols = (num: string) => {
    setNumOfCols(`grid-cols-${num}`)
  }

  const updatePageSize = (size: string) => {
    setPageSize(parseInt(size))
  }

  const value = {
    numOfCols,
    pageSize,
    page,
    updateNumberOfCols,
    updatePageSize,
    setPage
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}