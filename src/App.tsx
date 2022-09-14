import SimpleSubstitution from "./pages/simpleSubstitution";
import "./scss/app.scss";

const pages = ["Simple substitution", "Any permutation"];

function App() {
  return (
    <div className="App">
      <header>
        <div className="title">Cryptology</div>
        <div className="pages">
          {pages.map((element, index) => {
            return <p key={index}>{element}</p>;
          })}
        </div>
      </header>
      <main>
        <SimpleSubstitution />
      </main>
    </div>
  );
}

export default App;
