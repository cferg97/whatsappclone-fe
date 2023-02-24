import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { parseISO } from "date-fns";

const ChatBubble = (props) => {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <>
      <Container
        fluid
        className="chat-area-bubble"
        style={{
          backgroundColor:
            currentUser.userName === props?.user ? "#B4EBCB" : "white",
        }}
      >
        <Container fluid style={{ width: "100%", height: "100%" }}>
          <p>{props?.text}</p>
            <p className="text-muted" style={{ fontSize: "0.6rem" }}>
              Sent by: {props?.user?.userName} | {parseISO(props.sentAt).toLocaleDateString()} {parseISO(props.sentAt).toLocaleTimeString()}
            </p>
        </Container>
      </Container>
    </>
  );
};

export default ChatBubble;
