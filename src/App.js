import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/userprofile/UserProfile";
import CustomNav from "./components/Nav/CustomNav.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <UserProfile />
      <CustomNav></CustomNav>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
