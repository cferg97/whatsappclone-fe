import ChatArea from "./components/Chat/ChatArea";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/userprofile/UserProfile";
import CustomNav from "./components/Nav/CustomNav.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";

function App() {
  return (
    <>
      <div className="App">
        <UserProfile />
        <CustomNav></CustomNav>
        <LoginForm></LoginForm>
      </div>
      <Container fluid style={{ height: "100vh", width: "100vw" }}>
        <ChatArea />
      </Container>
    </>
  );
}

export default App;
