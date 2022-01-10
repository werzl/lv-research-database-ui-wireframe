import React from "react";

import { Card, Col, Form, Row } from "react-bootstrap";

export interface RatingCardProps {
    heading: string,
    value: string | number,
    icon: any,
    editable?: boolean,
    required?: boolean,
}

const RatingCard = (props: RatingCardProps) => {
    return (
        <Card className="text-left companyPage-rating-card">
            <Row className="mt-5 ms-3">
                <Col>
                    <Row>
                        <Col>
                            <h6>{props.heading}</h6>
                        </Col>
                    </Row>

                    {!props.editable ?
                        <Row className="text-center">
                            <Col><h2>{props.value}</h2></Col>
                        </Row>

                        :

                        <Row>
                            <Col>
                                <Form.Select className="mt-0" required={props.required} defaultValue={props.value}>
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    }
                </Col>

                <Col>
                    {props.icon}
                </Col>
            </Row>
        </Card>
    )
}

export default RatingCard;