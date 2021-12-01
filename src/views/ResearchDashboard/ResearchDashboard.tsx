import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Security } from "../../models/Security";
import CompaniesTable from "./CompaniesTable/CompaniesTable";

export interface ResearchDashboardProps {
    allowEdit?: boolean,
    isStatusBarVisible?: boolean,
    securities?: Security[],
    displayName?: string
}

export type TResearchDashboard = React.ReactElement<ResearchDashboardProps>;

const ResearchDashboard = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col className="text-center">
                        <div>Dashboard</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <CompaniesTable />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResearchDashboard;