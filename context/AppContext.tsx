import { createContext, useContext, ReactNode, useState, SetStateAction } from "react";

type appContextType = {
  numOfCols: string,
  updateNumberOfCols: (num: string) => void,
  // filter: {},
  // resetFilter: () => void,
  // filterResult: () => void,
}

const appContextDefaultValue: appContextType = {
  numOfCols: `grid-cols-2`,
  updateNumberOfCols: () => {},
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
  const [numOfCols, setNumOfCols] = useState<string>(``);
  // const [filter, setFilter] = useState<any>({
  //   brand: '',
  //   priceOrder: "",
  //   searchTerm: ""
  // })

  const updateNumberOfCols = (num: string) => {
    setNumOfCols(`grid-cols-${num}`)
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
    // filter,
    updateNumberOfCols,
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