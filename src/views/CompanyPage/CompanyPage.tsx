import React from "react";
import { Col, Container, Row, Tabs, Tab, Card, Form, Breadcrumb } from "react-bootstrap";
import CompanyPageRating from "./Rating/CompanyPageRating";
import HistoryTable from "./History/HistoryTable";

import "./CompanyPage.scss";
import { Link } from "react-router-dom";

export interface CompanyPageProps {
    companyName: string,
    ticker: string,
    price: number,
    currency: string,
    fmv: number,
    dr: number,
    tg: number,
    upside: number
}

const CompanyPage = (props: CompanyPageProps) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">
                                Securities
                            </Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active>
                            {props.companyName}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="text-center">
                    <h1>{props.companyName}</h1>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    <span className="companyPage-companyInfo">
                        <p>
                            <b>Ticker:</b> {props.ticker}  |
                            &nbsp;<b>Price:</b> {props.price} |
                            &nbsp;<b>Currency:</b> {props.currency}
                        </p>

                        <p>
                            &nbsp;<b>FMV:</b> {props.fmv} |
                            &nbsp;<b>Discount Rate:</b> {props.dr}% |
                            &nbsp;<b>Terminal Growth:</b> {props.tg}% |
                            &nbsp;<b>Upside:</b> {props.upside}%
                        </p>
                    </span>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Tabs
                        defaultActiveKey="rating"
                        transition={true}
                        className="mb-3">

                        <Tab eventKey="rating" title="Rating">
                            <CompanyPageRating />
                        </Tab>

                        <Tab eventKey="history" title="History">
                            <HistoryTable />
                        </Tab>

                        <Tab eventKey="price" title="Price">
                            Stock Price
                        </Tab>

                        <Tab eventKey="timeline" title="Timeline">
                            <Card>
                                <Card.Header>
                                    Parameters
                                </Card.Header>
                                <Card.Body>
                                    <br /><br /><br />
                                </Card.Body>
                            </Card>

                            <Card className="mt-5">
                                <Card.Header>
                                    Comments
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default CompanyPage;