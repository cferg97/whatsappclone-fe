import { Modal, Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewChatModal = (props) => {
  const [chat, setChat] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);

  console.log(chat);

  const changeChatState = (id) => {
    const arr = [];
    arr.push(id);
    setChat(arr);
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
            <h5>Select a user to chat with!</h5>
            <Form.Group>
              <Form.Control as="select">
                {currentUser && (
                  <>
                    {currentUser.contacts?.map((i) => (
                      <option>
                        {i.userName} | {i.email}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary">Create Chat</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewChatModal;
