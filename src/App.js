import "./App.css"
import data from "./data/db"
import CardList from "./components/CardList"
import { useState } from "react"



function App() {
    const [, setCards] = useState("");

    const onchangeCards = (newCards) => {
        setCards(newCards);
        localStorage.setItem("data", JSON.stringify(newCards));
    };


    return (
        <div className="wrapper">
            {
                localStorage.getItem("data")
                    ? <CardList cards={JSON.parse(localStorage.getItem("data"))} onchangeCards={onchangeCards} />
                    : <CardList cards={data} onchangeCards={onchangeCards} />
            }
        </div>
    );
}

export default App;
