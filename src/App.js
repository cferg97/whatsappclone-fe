import ChatArea from "./components/Chat/ChatArea";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid style={{ height: "100vh", width: "100vw" }}>
      
      <ChatArea />
    </Container>
  );
}

export default App;
