import { useEffect, useState } from "react"
import Button from "./components/Button"

function App() {
  const [query, setQuery] = useState("")
  const [operands, setOperands] = useState<Array<string | number>>([])
  const [total, setTotal] = useState<number>(0)

  const append = (value: string) => setQuery(query.concat(value))
  const del = () => setQuery(query.slice(0, -1))
  const save = (operator: string) => {
    setOperands([...operands, query, operator])
    setQuery("")
  } 
  const reset = () => {
    setQuery('')
    setOperands([])
  }
  const submit = async () => {
    if (query !== "") {
      await setOperands([...operands, query])
      setQuery('')
      calculateTotal()
    } else {
      console.log("Cannot submit")
    }
  }

  const calculateTotal = () => {
    try {
      if (operands.length > 1 && operands.length % 2 !== 0) {
        setOperands([eval(operands.join(' '))])
      } 
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   calculateTotal()
  // }, [operands])

  return (
    <div>
      <header>
        <h1>calc</h1>
      </header>
      <div>
        <p>{operands.join(' ')}</p>
        {/* <p>{total}</p> */}
        <p>{query}</p>
      </div>
      <div>
        <div>
          <Button handleClick={() => append("7")}>7</Button>
          <Button handleClick={() => append("8")}>8</Button>
          <Button handleClick={() => append("9")}>9</Button>
          <Button
            type=""
            handleClick={() => {
              del()
            }}
          >
            Del
          </Button>
          <Button handleClick={() => append("4")}>4</Button>
          <Button handleClick={() => append("5")}>5</Button>
          <Button handleClick={() => append("6")}>6</Button>
          <Button handleClick={() => save("+")}>+</Button>
          <Button handleClick={() => append("1")}>1</Button>
          <Button handleClick={() => append("2")}>2</Button>
          <Button handleClick={() => append("3")}>3</Button>
          <Button handleClick={() => save("-")}>-</Button>
          <Button handleClick={() => append(".")}>.</Button>
          <Button handleClick={() => append("0")}>0</Button>
          <Button handleClick={() => save("/")}>/</Button>
          <Button handleClick={() => save("*")}>x</Button>
        </div>
        <div>
          <Button handleClick={reset}>Reset</Button>
          <Button handleClick={submit}>=</Button>
        </div>
      </div>
    </div>
  )
}

export default App
