import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface NewResearchEntryProps {
    companyName: string,
    dateAdded: Date,
    // quality: 0 | 1 | 2 | 3,
    // fundamentals: 0 | 1 | 2 | 3,
    // fmv: number
}

const NewResearchEntry = (props: NewResearchEntryProps) => {
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

                        <Breadcrumb.Item>
                            <Link to={`/${props.companyName.replaceAll(" ", "")}`}>
                                {props.companyName}
                            </Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active>
                            New Research Entry
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="text-center">
                    <h1>{props.companyName}</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default NewResearchEntry;