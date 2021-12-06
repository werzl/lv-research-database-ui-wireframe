import React from "react";
import { Card, Col, Form, Row, Table } from "react-bootstrap";

import RatingDropDown from "./RatingDropDown";

const CompanyPageRating = () => {
    return (
        <div className="mt-5">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <Card className="border-0">
                        <Card.Header>
                            Current rating (most recently approved):
                        </Card.Header>

                        <Card.Body>
                            <Form>
                                <Table className="companyPage-rating-table" responsive>
                                    <thead>
                                        <tr>
                                            <td>Quality</td>
                                            <td>Fundamentals</td>
                                            <td>FMV</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>2500</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            {/* <Row>
                <Col>
                <p>Current rating (most recently approved):</p>
                </Col>
                </Row>
                
            <Row>
                <Col lg="4"></Col>
                <Col lg="4">
                    <Form>
                        <Table className="companyPage-rating-table" bordered>
                            <thead>
                                <tr>
                                    <td>Quality</td>
                                    <td>Fundamentals</td>
                                    <td>FMV</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        2500
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                    </Form>
                </Col>
            </Row> */}
        </div>
    );
}

export default CompanyPageRating;