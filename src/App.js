export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🐱‍👤 Travel The World 🙌</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip ? 🤷‍♂️</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        ✨ You have XXX items on your list, and you have already packed X( X%)
        items. ✨
      </em>
    </footer>
  );
}
