import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Security } from "../../models/Security";
import CompaniesTable from "./CompaniesTable/CompaniesTable";

import { Link } from "react-router-dom";

import "./ResearchDashboard.scss";

export interface ResearchDashboardProps {
    allowEdit?: boolean,
    isStatusBarVisible?: boolean,
    securities?: Security[],
    displayName?: string
}

export type TResearchDashboard = React.ReactElement<ResearchDashboardProps>;

const ResearchDashboard = () => {
    return (
        <Container className="mt-5 h-100">
            <Row>
                <Col className="text-center">
                    <h5>Securities</h5>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to="/AbbeyNationalPLC">
                        Abbey National PLC
                    </Link>
                </Col>
            </Row>

            <Row className="mt-5 h-100">
                <Col>
                    <CompaniesTable />
                </Col>
            </Row>
        </Container>
    )
}

export default ResearchDashboard;