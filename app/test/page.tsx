export default function MyList() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item, index, array) => (
        <li
          key={index}
          className={array[0] === item ? "font-bold" : "font-normal"}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
