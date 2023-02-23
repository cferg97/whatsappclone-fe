import { Modal, Button, Container, ListGroupItem, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllUsersAction, saveContactsAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const ContactsModel = (props) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.userSearchResults);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [userToAdd, setUserToAdd] = useState("");

  const contactsToSend = {
    contacts: userToAdd,
  };

  const onSubmit = () => {
    dispatch(saveContactsAction(contactsToSend))
    props.handleClose()
    setQuery("")
    setUserToAdd("")
  }

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const searchFunction = async () => {
    if (query !== "") {
      try {
        const accessToken = localStorage.getItem("UserAccessToken");
        const token = accessToken.split('"').join("");
        let response = await fetch(
          `http://localhost:3001/users?userName=${query}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          let fetchedData = await response.json();
          setResults(fetchedData);
        } else {
          console.log("Couldn't find anything");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setResults("");
    }
  };

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
          <Modal.Title>Add to Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <input
            value={query}
            placeholder="Search by username"
            onChange={(e) => setQuery(e.target.value)}
            className="contacts-search text-center"
            type="text"
          />

          <Button onClick={() => searchFunction()} className="m-2">
            Search for users
          </Button>
          <Container>
            {results && (
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select">
                  {results.map((i) => (
                    <option onClick={() => setUserToAdd(i._id)}>
                      {i.userName} | {i.email}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
            {/* {results &&
              results.map((i) => (
                <>
                
                  <ListGroupItem style={{ margin: "1rem", border: '1px solid lightgrey', borderRadius: '10px' }}>
                    {i.userName === currentUser.userName ? "What's wrong with you?" : i.userName + " | " + i.email} 
                  </ListGroupItem>
                </>
              ))} */}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSubmit()}>Add To Contacts</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactsModel;
