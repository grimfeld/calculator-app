export const ThemeToggler = ({ theme, changeTheme }: {
  theme: "light" | "dark" | "saturated"
  changeTheme(newTheme: "light" | "dark" | "saturated"): void
}) => {
  return (
    <div className="Theme-toggler">
      <h2>Theme</h2>
      <div>
        <div className="Label-wrapper">
          <span className="Label">1</span>
          <span className="Label">2</span>
          <span className="Label">3</span>
        </div>
        <div className="Input-wrapper">
          <div className={["Input", theme === "dark" ? "active" : ""].join(' ')} onClick={() => changeTheme("dark")} />
          <div className={["Input", theme === "light" ? "active" : ""].join(' ')} onClick={() => changeTheme("light")} />
          <div className={["Input", theme === "saturated" ? "active" : ""].join(' ')} onClick={() => changeTheme("saturated")} />
        </div>
      </div>
    </div>
  )
}
