import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/Nav/CustomNav.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <CustomNav></CustomNav>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
