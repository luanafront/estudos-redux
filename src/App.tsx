import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import {increment, incrementAmount} from "./features/counter/counter-slice";
import {useAppSelector} from "./hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementAmount(1))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
// const mapStateToProps = (state: any) => {
//   return {
//     count: state.counter.value
//   }
// }
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     increment: () => dispatch({type: 'counter/increment'}),
//     incrementAmount: (amount: number) => dispatch({type: 'counter/incrementAmount', payload: amount})
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
