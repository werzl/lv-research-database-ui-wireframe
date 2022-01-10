import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export interface ResearchEntryProps {
    companyName: string,
    dateAdded: Date,
    id: string,
    comments: string//,
    // quality: 0 | 1 | 2 | 3,
    // fundamentals: 0 | 1 | 2 | 3,
    // fmv: number
}

const ResearchEntry = (props: ResearchEntryProps) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <LinkContainer to="/">
                                <p className="companyPage-breadcrumb-link">Securities</p>
                            </LinkContainer>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            <LinkContainer to={`/${props.companyName.replaceAll(" ", "")}`}>
                                <p className="companyPage-breadcrumb-link">{props.companyName}</p>
                            </LinkContainer>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active>
                            {props.dateAdded.toLocaleDateString()}
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

export default ResearchEntry;