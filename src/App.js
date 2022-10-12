import "./App.css"
import data from "./data/db"
import CardList from "./components/CardList"



function App() {

    return (
        <div className="wrapper">
            {
                localStorage.getItem("data")
                    ? <CardList cards={JSON.parse(localStorage.getItem("data"))} />
                    : <CardList cards={data} />
            }
        </div>
    );
}

export default App;
