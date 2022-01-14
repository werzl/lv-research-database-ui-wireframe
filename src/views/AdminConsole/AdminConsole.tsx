import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminTable from "./AdminTable/AdminTable";

import "./AdminConsole.scss";

const AdminConsole = () => {
    return (
        <Container className="mt-5 h-100">
            <Row>
                <Col className="text-center">
                    <h4>Admin Console</h4>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <AdminTable />
                </Col>
            </Row>
        </Container>
    )
};

export default AdminConsole;