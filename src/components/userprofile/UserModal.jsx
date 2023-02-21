import { Modal, Container, Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";

const UserModal = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        size="lg"
        style={{ height: "40rem" }}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>Profile</Modal.Header>
        <Modal.Body className="m-0 p-0" style={{ height: "40rem" }}>
          <Container
            fluid
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyItems: "center",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col style={{width: '100%', height: 'fit-content', justifyItems: 'center'}}>
                <UserProfile />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserModal;
