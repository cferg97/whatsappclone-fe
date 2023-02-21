import { Container, Row } from "react-bootstrap";
import {TbSend} from 'react-icons/tb'

const TextArea = (props) => {
    return ( 
        <>
        <Container fluid className="chat-area-text-box">
            <Row style={{height: '100%', width: '100%', justifyContent: 'center', alignContent: 'center'}}>
                <input style={{height: '3rem', width: '50%', borderRadius: '1rem'}} as="textarea" placeholder="Type a message!"/>
            </Row>
        </Container>
        </>
     );
}
 
export default TextArea;