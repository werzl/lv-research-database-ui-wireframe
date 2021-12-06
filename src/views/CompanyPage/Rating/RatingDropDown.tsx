import React from "react";
import { Form } from "react-bootstrap";

const RatingDropDown = () => {
    return (
        <Form.Group className="me-2">
            <Form.Select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </Form.Select>
        </Form.Group>
    );
}

export default RatingDropDown;