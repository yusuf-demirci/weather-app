import { InputGroup, Form } from "react-bootstrap";
import UserInput from "./UserInput";
import LoadingButton from "./LoadingButton";

function InputBox() {
    return (
        <InputGroup className="mt-3 mx-auto d-flex justify-content-center w-50">
            <UserInput />
            <LoadingButton />
        </InputGroup>
    );
}

export default InputBox;
