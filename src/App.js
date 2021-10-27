import "./App.css";
import Develop from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Develop name="Guilherme Braz" age="22" country="Brazlândia" />
        <Develop name="Vilson" age="15" country="ilha" />
        <Develop name="Daniel" age="18" country="Hospício" />
        <Develop name="André" age="27" country="Creche" />
        <Develop name="Lucas Ananelson" age="24" country="Mirassol Doeste" />
      </header>
    </div>
  );
}

export default App;
