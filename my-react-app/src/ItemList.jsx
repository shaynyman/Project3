//Loops through array of items and returns it as a list that user sees on the page.
function ItemList({ items, deleteItem }) {
  return (
    <ul>                                            
        {items.map((item, i) => (                  
  <li key={i}>
    {item}
    <button onClick={() => deleteItem(i)}>Delete Item</button>
  </li>
        ))}
    </ul>
    );
}
export default ItemList;