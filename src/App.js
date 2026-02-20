import "./index.css";
import Switch from "./components/Switch";

const noOfSwitches = Array.from({ length: 19 });

function App() {
  return (
    <div className="App">
      <h4>switches.</h4>
      <div className="mainContainer">
        {noOfSwitches.map((v, index) => (
          <Switch key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
