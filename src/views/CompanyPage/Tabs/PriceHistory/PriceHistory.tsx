import React from "react";

import { Card, Col, Row } from "react-bootstrap";

import PriceGraph from "./Graphs/PriceGraph";
import QualityGraph from "./Graphs/QualityGraph";
import FundamentalsGraph from "./Graphs/FundamentalsGraph";

const PriceHistory = () => {
    return (
        <Row className="mt-5">
            <Col>
                <Card className="h-100">
                    <Card.Body>
                        <PriceGraph />
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body className="companyPage-priceHistory-quality-graph">
                                <QualityGraph />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        <Card>
                            <Card.Body className="companyPage-priceHistory-fundamentals-graph">
                                <FundamentalsGraph />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default PriceHistory;