import { useEffect, useState } from "react"
import Button from "./components/Button"
import { ThemeToggler } from "./components/ThemeToggler"
import { ThemeContext } from "./contexts/Theme"
import "./App.css"

function App() {
  const [theme, setTheme] = useState<"light" | "dark" | "saturated">("light")

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme !== "light" && theme !== "dark" && theme !== "saturated") return
    setTheme(theme)
  }, [])

  const changeTheme = (newTheme: "light" | "dark" | "saturated") => {
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  const [query, setQuery] = useState("")
  const [operands, setOperands] = useState<Array<string | number>>([])

  const append = (value: string) => setQuery(query.concat(value))
  const del = () => setQuery(query.slice(0, -1))
  const save = (operator: string) => {
    setOperands([...operands, query, operator])
    setQuery("")
  }
  const reset = () => {
    setQuery("")
    setOperands([])
  }
  const submit = async () => {
    if (query !== "") {
      setOperands([])
      setQuery(eval(operands.join(' ') + query))
    } else {
      console.log("Cannot submit")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={["main", theme].join(" ")}>
        <div className="wrapper">
          <header>
            <h1>calc</h1>
            <ThemeToggler theme={theme} changeTheme={changeTheme} />
          </header>
          <div className="screen">
            <p className="history">{operands.join(" ")}</p>
            <p className="query">{query}</p>
          </div>
          <div className="keypad">
            <Button handleClick={() => append("7")}>7</Button>
            <Button handleClick={() => append("8")}>8</Button>
            <Button handleClick={() => append("9")}>9</Button>
            <Button
              classes="tertiary"
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
            <Button classes="reset tertiary" handleClick={reset}>
              Reset
            </Button>
            <Button classes="submit secondary" handleClick={submit}>
              =
            </Button>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
