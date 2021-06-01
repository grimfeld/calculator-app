import React from "react"

interface Params {
  children: React.ReactNode
  classes?: string
  handleClick(): void
}

const Button = ({ children, classes, handleClick }: Params) => {
  return (
    <button className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
