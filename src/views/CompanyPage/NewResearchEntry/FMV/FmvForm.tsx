import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FMV } from "../../../../types/FMV";

export interface FmvFormProps {
    fmv: FMV
}

const FmvForm = (props: FmvFormProps) => {
    return (
        <Row>
            <Col>
                <Form.Control defaultValue={props.fmv.approved.raw.value} as="input" type="number"></Form.Control>
            </Col>
        </Row>
    )
}

export default FmvForm;