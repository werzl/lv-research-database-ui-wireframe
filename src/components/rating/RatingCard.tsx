import React from "react";

import { Card, Col, Row } from "react-bootstrap";

export interface RatingCardProps {
    heading: string,
    value: string | number,
    icon: any
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

                    <Row className="text-center">
                        <Col><h2>{props.value}</h2></Col>
                    </Row>
                </Col>

                <Col>
                    {props.icon}
                </Col>
            </Row>
        </Card>
    )
}

export default RatingCard;