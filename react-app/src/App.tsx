import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Tokyo", "SanFransisco", "LossAngelas", "New York", "Canada"];
  return (
    <>
      <ul className="list-group">
        <h1>List</h1>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
