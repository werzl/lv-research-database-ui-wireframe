import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Security } from "../../models/Security";
import CompaniesTable from "./CompaniesTable/CompaniesTable";

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
                    <h4>Securities</h4>
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