import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Security } from "../../models/Security";
import CompaniesTable from "./CompaniesTable/CompaniesTable";

import { Link } from "react-router-dom";

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
                        <div>Research Dashboard</div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to="/AbbeyNationalPLC">
                            Abbey National PLC
                        </Link>
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