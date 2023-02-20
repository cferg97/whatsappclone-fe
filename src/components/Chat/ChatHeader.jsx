import { Container, Row, Col, Button } from "react-bootstrap";

const ChatHeader = () => {
  return (
    <Container fluid className="chat-area-header-details p-0 m-0">
        <img alt="" className="img-fluid p-2" style={{borderRadius: 50}} src="https://picsum.photos/100/100" />
    <Container fluid style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
        <h5>Test User</h5>
        <h6 className="text-muted">Last Seen At: [time]</h6>
    </Container>
    </Container>
  );
};

export default ChatHeader;
