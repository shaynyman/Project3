//Function to switch back and forth between light and dark mode. Contains switch button.
function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
