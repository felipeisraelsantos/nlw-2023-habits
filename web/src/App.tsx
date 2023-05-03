import './styles/global.css'
import { Habit } from "./componets/Habit"

function App() {
  return (
    <>
      <Habit completed={3}/>
      <Habit completed={10}/>
    </>
  )
}

export default App
