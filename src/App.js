import "./index.css";
import Switch from "./components/Switch";

const noOfSwitches = Array.from({ length: 19 });

console.log(noOfSwitches);

function App() {
  // Create empty array to map over

  return (
    <div className="App">
      <h4>switches.</h4>
      <div className="mainContainer">
        {noOfSwitches.map((v, index) => (
          <Switch key={index} />
        ))}
        <Switch />
      </div>
    </div>
  );
}

export default App;
