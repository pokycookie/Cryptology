import { useState } from "react";
import PageSwitch from "./components/pageSwitch";
import "./scss/app.scss";

export type TPage = "home" | "simpleSubstitution" | "anyPermutation";

const title = ["Simple substitution", "Any permutation"];
const pageArr: TPage[] = ["simpleSubstitution", "anyPermutation"];

function App() {
  const [page, setPage] = useState<TPage>("home");

  const pageHandler = (index: number) => {
    setPage(pageArr[index]);
  };

  return (
    <div className="App">
      <header>
        <div className="title" onClick={() => setPage("home")}>
          Cryptology
        </div>
        <div className="pages">
          {title.map((element, index) => {
            return (
              <p key={index} onClick={() => pageHandler(index)}>
                {element}
              </p>
            );
          })}
        </div>
      </header>
      <main>
        <PageSwitch page={page} />
      </main>
    </div>
  );
}

export default App;
