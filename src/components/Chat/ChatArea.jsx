import { Container, Row, Col } from "react-bootstrap";
import ChatHeader from "./ChatHeader";
import Contacts from "../Contacts/Contacts";
import { BiMessageAdd, BiMessageDetail } from "react-icons/bi";
import { useEffect, useState } from "react";
import NewChatModal from "./NewChatModal";
import TextArea from "./TextArea";
import ChatBubble from "./ChatBubbleOwn";
import UserModal from "../userprofile/UserModal";
import { useDispatch } from "react-redux";
import { fetchCurrentUser, getUserConversations } from "../redux/actions";
import { useSelector } from "react-redux";
import { AiOutlineUserAdd } from "react-icons/ai";
import ContactsModel from "./ContactsModel";
import { io } from "socket.io-client";

const ChatArea = (props) => {
  const socket = io("http://localhost:3001", { transports: ["websocket"] });
  const currentUser = useSelector((state) => state.currentUser);
  const allConversations = useSelector((state) => state.allConversations)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [selectedChat, setSelectedChat] = useState("");

  const [chatHistory, setChatHistory] = useState([]);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  console.log(selectedChat)

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(getUserConversations())
  }, []);

  useEffect(() => {
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);
    });
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("Username")
    socket.emit("setUsername", { username: username });

    socket.on("loggedIn", (onlineUsersList) => {
      setUsers(onlineUsersList);
    });
  }, []);

  console.log(users);

  // const testContactsList = [
  //   {
  //     name: "jackie",
  //     id: 26,
  //   },
  //   {
  //     name: "Bob",
  //     id: 20,
  //   },
  //   {
  //     name: "david",
  //     id: 2,
  //   },
  // ];

  // const testMessages = [
  //   {
  //     text: "Hello! How are you?",
  //     userName: "jackie"
  //   },
  //   {
  //     text: "Hi! I'm fine thanks. You?",
  //     userName: 'cferg97'
  //   },
  //   {
  //     text: "Oh, I'm not too bad. I've got a lot going on at the minute but nothing I can't deal with.",
  //     userName: 'jackie'
  //   },
  //   {
  //     text: "Life treating you ok?",
  //     userName: 'jackie'
  //   },
  //   {
  //     text: "Yeah, things are going alright!",
  //     userName: 'cferg97'
  //   }
  // ]

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserClose = () => setShowUser(false);
  const handleUserOpen = () => setShowUser(true);

  const handleContactsClose = () => setShowContacts(false);
  const handleContactsOpen = () => setShowContacts(true);

  return (
    <>
      {currentUser && (
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
              <Row className="text-center mt-2 p-0 m-0">
                <Container
                  style={{
                    display: "flex",
                    justifyItems: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    className="img-fluid user-profile-pic"
                    onClick={() => setShowUser(true)}
                    style={{
                      height: "50px",
                      width: "auto",
                      borderRadius: "100%",
                      position: "absolute",
                      left: 20,
                    }}
                    src={currentUser?.avatar}
                    alt=""
                  />
                  <h3 className="mx-auto my-auto">Chats</h3>

                  <button
                    onClick={() => handleContactsOpen()}
                    className="contacts-btn"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "2rem",
                    }}
                  >
                    <AiOutlineUserAdd />
                  </button>
                </Container>
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
                  alignItems: 'center'
                }}
              >
                {/* {testContactsList.map((contact) => (
                  <Contacts
                    user={contact}
                    onClick={() => {
                      setSelectedChat(contact.name);
                    }}
                  />
                ))} */}
                {currentUser && allConversations?.map((i) => (
                  <Contacts user={i.members} onClick={() => setSelectedChat(i._id.toString())} />
                ))}
                
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
            <ChatHeader
              selectedChat={selectedChat}
              user={props.selectedChat ? props.selectedChat : ""}
            />
            <Container
              style={{ width: "100%", height: "90%" }}
              fluid
              className="chat-area-chat-display"
            >
              <Row style={{ height: "90%", width: "100%" }}>
                <Col md={12} style={{ height: "90%" }}>
                  {/* {testMessages.map((message) => (
                    <ChatBubble text={message.text} user={message.userName}/>
                  ))} */}
                </Col>
              </Row>
            </Container>
            <TextArea />
          </Container>
        </Container>
      )}

      <NewChatModal
        // contacts={testContactsList}
        show={show}
        onHide={handleClose}
        handleClose={handleClose}
      />
      <UserModal show={showUser} handleClose={handleUserClose} />
      <ContactsModel show={showContacts} handleClose={handleContactsClose} />
    </>
  );
};

export default ChatArea;
