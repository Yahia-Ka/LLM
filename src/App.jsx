import React from "react"
import "./App.css"
// import CompA from "./components/CompA"
// import CompB from "./components/CompB"
// import CompC from "./components/CompC"
import { useReducer, createContext } from "react"
import DataFetching1 from "./components/DataFetching1"
import DataFetching2 from "./components/DataFetching2"

// export const CountContext = createContext()
// const CountProvider = CountContext.Provider
// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1
//     case "decrement":
//       return state - 1
//     case "reset":
//       return initialState
//     default:
//       return state
//   }
// }

const App = () => {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <DataFetching2 />
    </>
    // <CountProvider value={{ countState: count, countDispatch: dispatch }}>
    //   <div>
    //     count -: {count}
    //     <CompA />
    //     <CompB />
    //     <CompC />
    //   </div>
    // </CountProvider>
  )
}

export default App
