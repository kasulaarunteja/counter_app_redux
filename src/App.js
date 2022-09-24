import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Redux/actions'

function App() {
  const countapp = useSelector((state) => state.changeTheNumber)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h4>hello world</h4>
      <h2>counter app</h2>
      <button onClick={() => dispatch(decNumber())}>-</button>

      <h4>
        <input value={countapp} />
      </h4>
      <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
  )
}

export default App
