import { Modal, Button, Container } from "react-bootstrap";
import { useState } from "react";

const NewChatModal = (props) => {
  const [chat, setChat] = useState([]);

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
            {" "}
            {/* {props.contacts.map((contact, index) => (
              <>
                <li key={index} style={{ listStyle: "none" }}>
                  <span style={{ marginRight: 4 }}>
                    <input
                      type="checkbox"
                      onChange={() => changeChatState(contact.id)}
                    />
                  </span>
                  {contact.name}
                </li>
              </>
            ))} */}
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
