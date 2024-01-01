
import { useState } from "react"

function App() {
  const [num, setNum] = useState(0);
  const addNum = () => {
    setNum(num + 1);
  }
  const removeNum = () => {
    if(num === 0){
      console.log('not possible');
    }else{
      setNum(num - 1);
    }
  }
  return (
    <>    <h1>Hello react{num}</h1>
    <button onClick={addNum}>Add {num}</button>
    <button onClick={removeNum}>subract {num}</button>
  </>
)
}

export default App