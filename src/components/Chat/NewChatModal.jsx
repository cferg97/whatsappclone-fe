import { Modal, Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newChatAction } from "../redux/actions";

const NewChatModal = (props) => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState([]);
  const [chatName, setChatName] = useState("");
  const [userToChat, setUserToChat] = useState("");
  const currentUser = useSelector((state) => state.currentUser);
  const currentChat = useSelector((state) => state.currentConversation);

  const chatToSend = {
    members: [userToChat, currentUser._id],
    name: chatName,
    room: currentUser?._id + userToChat + "chat",
    firstMessage: `Hello ${userToChat} and ${currentUser?._id}`,
  };

  const onSubmit = () => {
    dispatch(newChatAction(chatToSend));
    props.handleClose();
    setChatName("");
    setUserToChat("");
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Start a new conversation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <h5 className="mb-3">Select a user to chat with!</h5>
            <Form.Group>
              <Form.Control as="select">
                {currentUser && (
                  <>
                    {currentUser.contacts?.map((i, index) => (
                      <option
                        key={index + 5}
                        onClick={() => {
                          setUserToChat(i._id);
                           props.joinRoom()
                        }}
                      >
                        {i.userName} | {i.email}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Form.Group>

            <h5 className="mt-3 mb-3 ">Name your chat!</h5>
            <Form.Group>
              <Form.Control
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                type="text"
                placeholder="Enter a chat name!"
              />
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSubmit()}>
            Create Chat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewChatModal;
