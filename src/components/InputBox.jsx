import { InputGroup, Row, Col } from "react-bootstrap";
import UserInput from "./UserInput";
import LoadingButton from "./LoadingButton";

function InputBox() {
    return (
        <Row>
            <Col className="mx-auto" xl={6} lg={6} md={8} sm={11}>
                <InputGroup className="mt-3 mx-auto d-flex justify-content-center">
                    <UserInput />
                    <LoadingButton />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default InputBox;
