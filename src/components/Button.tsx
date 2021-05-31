import React from "react"

interface Params {
  children: React.ReactNode
  type?: string
  handleClick(): void
}

const Button = ({ children, type, handleClick }: Params) => {
  return <button onClick={handleClick}>{children}</button>
}

export default Button
