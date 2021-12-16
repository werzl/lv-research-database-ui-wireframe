import React from "react";
import { Form } from "react-bootstrap";

export interface RatingDropDownProps {
    defaultValue: 0 | 1 | 2 | 3,
    disabled?: boolean
}

const RatingDropDown = (props: RatingDropDownProps) => {
    return (
        <Form.Group className="me-2">
            <Form.Select defaultValue={props.defaultValue}>
                <option value={0} disabled={props.disabled}>0</option>
                <option value={1} disabled={props.disabled}>1</option>
                <option value={2} disabled={props.disabled}>2</option>
                <option value={3} disabled={props.disabled}>3</option>
            </Form.Select>
        </Form.Group>
    );
}

export default RatingDropDown;