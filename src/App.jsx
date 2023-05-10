import logo from "./logo.svg";
import "./App.css";
import { CurrentElectionPage, ElectionPage } from "./components/pages";
function App() {
  return (
    <div className="App">
      {/* <CurrentElectionPage /> */}
      <ElectionPage />
    </div>
  );
}

export default App;
