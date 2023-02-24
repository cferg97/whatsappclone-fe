import { Container, Row, Col, Card } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteChatAction } from "../redux/actions";
import { fetchSelectedChat } from "../redux/actions";

const Contacts = (props) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteChatAction(id));
  };

  return (
    <>
      <Card
        onClick={() => dispatch(fetchSelectedChat(props.id))}
        className="p-0 m-0 chat-area-card"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "4rem",
          width: "100%",
        }}
      >
        <Card.Body
          className="p-0"
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            marginLeft: "5px",
          }}
        >
          <img
            className="img-fluid"
            style={{ borderRadius: "100%", height: "50px" }}
            alt=""
            src={props.avatar ? props.avatar : "http://picsum.photos/100/100"}
          />
          <Container
            className="p-0"
            style={{ height: "100%", alignItems: "center", marginLeft: "10px" }}
          >
            <Row
              style={{ width: "100%", height: "100%", alignContent: "center" }}
              className="m-0 p-0"
            >
              <p style={{ lineHeight: "0.9rem", marginTop: "10px" }}>
                {props.user.length} members <br />
                <span style={{ fontSize: "0.8rem" }}>{props.name}</span>
              </p>
            </Row>
            {/* <h6 className="text-muted">[last message sent]</h6> */}
          </Container>
          <Container
            style={{
              width: "fit-content",
              marginLeft: "auto",
              color: "lightgrey",
            }}
          >
            <BsFillTrashFill
              onClick={() => onDelete(props.id)}
              className="delete-chat-btn"
            />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Contacts;
