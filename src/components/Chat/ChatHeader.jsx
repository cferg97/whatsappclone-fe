import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ChatHeader = (props) => {
  const currentChat = useSelector((state) => state.currentConversation);
  const currentUser = useSelector((state) => state.currentUser);
  const members = currentChat.members?.map((user) => (
    <span>
      {user.userName === currentUser?.userName ? "Me" : user.userName},{" "}
    </span>
  ));
  return (
    <Container fluid className="chat-area-header-details p-0 m-0">
      <img
        alt=""
        className="img-fluid p-2"
        style={{ borderRadius: 50 }}
        src={
          currentChat?.avatar
            ? currentChat?.avatar
            : "https://picsum.photos/100/100"
        }
      />
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Row className="p-0 m-0">
          {currentChat.length !== 0 ? (
            <Container>
              Chat Between: {members} | Chat Name: {currentChat?.name}
            </Container>
          ) : (
            <h6>Choose a chat to get started</h6>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default ChatHeader;
