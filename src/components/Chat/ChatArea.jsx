import { Container, Row, Col } from "react-bootstrap";
import ChatHeader from "./ChatHeader";
import Contacts from "../Contacts/Contacts";
import { BiMessageAdd, BiMessageDetail } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { useState } from "react";
import NewChatModal from "./NewChatModal";

const ChatArea = () => {
  const [show, setShow] = useState(false);

  const testContactsList = [
    {
      name: "jackie",
      id: 26,
    },
    {
      name: "Bob",
      id: 20,
    },
    {
      name: "david",
      id: 2,
    },
  ];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                }}
              >
                <BiMessageDetail />
              </button>
              <vr style={{ border: "1px solid lightgrey" }} />
              <button
                onClick={handleShow}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                }}
              >
                <BiMessageAdd />
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

      <NewChatModal
        contacts={testContactsList}
        show={show}
        onHide={handleClose}
        handleClose={handleClose}
      />
    </>
  );
};

export default ChatArea;
