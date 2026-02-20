import "./index.css";
import Switch from "./components/Switch";

const noOfSwitches = Array.from({ length: 5 });

console.log(noOfSwitches);

function App() {
  // Create empty array to map over

  return (
    <div className="App">
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
