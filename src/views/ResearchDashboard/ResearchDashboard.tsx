import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Security } from "../../models/Security";

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
            <Container>
                <Row>
                    <Col className="text-center">
                        <div>Dashboard</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResearchDashboard;