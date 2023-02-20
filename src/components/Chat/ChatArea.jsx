import { Container, Row, Col } from "react-bootstrap";
import ChatHeader from "./ChatHeader";
import Contacts from "../Contacts/Contacts";
import { BsChat } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

const ChatArea = () => {
  return (
    <Container
      fluid
      className="m-0 p-0"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflowY: "scroll",
      }}
    >
      <Container
        fluid
        style={{
          position: "absolute",
          height: "100%",
          left: 0,
          width: "25%",
          backgroundColor: "#E4E4E4",
          borderRight: "1px solid grey",
        }}
      >
        <Container fluid>
          <Row className="text-center mt-2">
            <h3>Chats</h3>
          </Row>
          <Row>
            <input
              style={{
                borderRadius: "10px",
                border: "none",
                textAlign: "center",
              }}
              placeholder="Search for a conversation"
              type="text"
            />
          </Row>
          <hr />
          <Container
            fluid
            className="p-0 m-0"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              maxHeight: "70%",
            }}
          >
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
          </Container>
          <Container
            className="m-0 p-0"
            style={{
              display: "flex",
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "3rem",
              backgroundColor: "white",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <button
              style={{ background: "none", border: "none", fontSize: "1.5rem" }}
            >
              <BsChat />
            </button>
            <vr style={{ border: "1px solid lightgrey" }} />
            <button
              style={{ background: "none", border: "none", fontSize: "1.5rem" }}
            >
              <RiContactsLine />
            </button>
          </Container>
        </Container>
      </Container>
      <Container
        fluid
        style={{ position: "absolute", right: 0, width: "75%" }}
        className="chat-area-main-con p-0 m-0"
      >
        <ChatHeader />
      </Container>
    </Container>
  );
};

export default ChatArea;
