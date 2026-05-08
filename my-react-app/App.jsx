import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import AddItems from "./AddItems";
import ItemList from "./ItemList";

function App() {
//Loads saved theme from localStorage or defaults to light
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
});

//Loads saved list array or empty array if none saved from localStorage
const [items, setItems] = useState(() => {
  const saved = localStorage.getItem("items");
  return saved ? JSON.parse(saved) : [];
});

//Save changed theme to localStorage.
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

//Save updated list items array to localStorage.
useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
}, [items]);

//Create div element to correspond with CSS styling. Everything within div re-renders and updates each time page loads.
return (
  <div className={theme === "light" ? "light" : "dark"}>
    <h1>List of My Current Favorite Songs</h1>

    <ThemeToggle theme={theme} setTheme={setTheme} />

    <AddItemForm setItems={setItems} />

    <ItemList items={items} />
  </div>
  );
}

export default App;