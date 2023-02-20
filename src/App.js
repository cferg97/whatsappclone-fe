import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/Nav/CustomNav";
import LoginComponent from "./components/Login";

function App() {
  return (
    <div className="App">
      <CustomNav></CustomNav>
      <LoginComponent></LoginComponent>
    </div>
  );
}

export default App;
