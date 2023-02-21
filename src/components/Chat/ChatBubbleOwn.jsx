import { Container } from "react-bootstrap";

const ChatBubble = (props) => {
  return (
    <>
      <Container fluid className="chat-area-bubble">
        <Container fluid style={{width: '100%', height: '100%', textAlign: 'center',}}>
          <p>{props.text}</p>
          <p className="text-muted" style={{fontSize: '0.6rem'}}>Sent by: [user]</p>
        </Container>
      </Container>
    </>
  );
};

export default ChatBubble;
