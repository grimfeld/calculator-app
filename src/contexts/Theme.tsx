import React from "react"

export const ThemeContext =
  React.createContext<{
    theme: "light" | "dark" | "saturated"
    changeTheme(newTheme: "light" | "dark" | "saturated"): void
  } | null>(null)
