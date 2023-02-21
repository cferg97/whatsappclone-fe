import ChatArea from "./components/Chat/ChatArea";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/userprofile/UserProfile";
import CustomNav from "./components/Nav/CustomNav.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App">
        <UserProfile />
        <CustomNav></CustomNav>
        <LoginForm></LoginForm>
      </div>
      <Container fluid style={{ height: "100vh", width: "100vw" }}>
        <ChatArea />
      </Container> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
