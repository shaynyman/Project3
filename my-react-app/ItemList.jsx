function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (             //This loops through the array of list items and returns an actual
        <li key={i}>{item}</li>             //list of items that the user sees.
      ))}
    </ul>
  );
}

export default ItemList;