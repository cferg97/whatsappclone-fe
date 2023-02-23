import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllUsersAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ContactsModel = (props) => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.userSearchResults)

  const addToContacts = []

  console.log(addToContacts)

  useEffect(() => {
    dispatch(getAllUsersAction())
  }, [])
  return (
    <>
      {" "}
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {users.map((i) => (
            <li onClick={(e) => addToContacts.push(e.target.value)}>{i.userName}</li>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>   
          <Button variant="primary">Add To Contacts</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactsModel;
