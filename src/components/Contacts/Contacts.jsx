import { Container, Row, Col, Card } from "react-bootstrap";
import {BsFillTrashFill} from 'react-icons/bs'

const Contacts = () => {
  return (
    <>
      <Card className="p-0 m-0" style={{ display: 'flex', flexDirection: 'column', height: "4rem", width: '100%' }}>
        <Card.Body className="p-0" style={{display: 'flex', height:'100%', alignItems: 'center', marginLeft: '5px'}}>
            <img
              className="img-fluid"
              style={{borderRadius: '100%'}}
              alt=""
              src="https://picsum.photos/50/50"
            />
            <Container className="p-0" style={{height: '100%', alignItems: 'center', marginLeft: '10px'}}>
                <h5 className="mt-1">Test User</h5>
                <h6 className="text-muted">[last message sent]</h6>
            </Container>
            <Container style={{width: 'fit-content',marginLeft: 'auto', color: 'lightgrey'}}>
                <BsFillTrashFill/>
            </Container>
        </Card.Body>

      </Card>
    </>
  );
};

export default Contacts;
