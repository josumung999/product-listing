import { createContext, useContext, ReactNode, useState, SetStateAction } from "react";

type appContextType = {
  numOfCols: string,
  pageSize: number,
  page: number,
  adPosition: string,
  updateNumberOfCols: (num: string) => void,
  updatePageSize: (size: string) => void,
  setPage: (page: any) => void,
  setAdPosition: (position: string) => void,
}

const appContextDefaultValue: appContextType = {
  numOfCols: ``,
  pageSize: 5,
  page: 0,
  adPosition: 'top',
  updateNumberOfCols: () => {},
  updatePageSize: () => {},
  setPage: () => {},
  setAdPosition: () => {}
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
  const [adPosition, setAdPosition] = useState<string>('top');

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
    adPosition,
    updateNumberOfCols,
    updatePageSize,
    setPage,
    setAdPosition
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}