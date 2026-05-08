import { useState } from "react";

function AddItems({ setItems }) {           //Function to update list of items
  const [input, setInput] = useState("");

  function handleSubmit(e) {                //Runs when form is submitted
    e.preventDefault();                     //Prevents browser from refreshing
    if (!input.trim()) return;              //Safeguards against adding empty strings

    setItems(prev => [...prev, input.trim()]);      //Creates a new array with previous list items and adds new item to end of list.
    setInput("");                                   //Clears text box after new item is added
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}      //Updates the state when something is typed
        placeholder="Add an item..."                    //Button to submit form and add new item
      />
      <button type="submit">Add New List Item</button>                
    </form>
  );
}

export default AddItems;
