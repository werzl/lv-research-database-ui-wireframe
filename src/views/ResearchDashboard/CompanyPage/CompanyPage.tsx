import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

import styles from "./CompanyPage.module.scss";

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
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>{props.companyName}</h1>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    <span className={styles.companyInfo}>
                        <p>
                            <b>Ticker:</b> {props.ticker}  |
                            &nbsp;<b>Price:</b> {props.price} |
                            &nbsp;<b>Currency:</b> {props.currency} |
                            &nbsp;<b>FMV:</b> {props.fmv} |
                            &nbsp;<b>DR:</b> {props.dr} |
                            &nbsp;<b>TG:</b> {props.tg} |
                            &nbsp;<b>Upside:</b> {props.upside} |
                        </p>
                    </span>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Tabs
                        defaultActiveKey="history"
                        transition={true}
                        className="mb-3">

                        <Tab eventKey="history" title="History">
                            History
                        </Tab>
                        <Tab eventKey="price" title="Price">
                            Stock Price
                        </Tab>
                        <Tab eventKey="timeline" title="Timeline">
                            List
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default CompanyPage;