import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import AdminTable from "./PendingTable/PendingTable";

import "./AdminConsole.scss";

const AdminConsole = () => {
    const [defaultTab, setDefaultTab] = useState<"pending" | "approvalNotRequired">("pending");

    return (
        <Container className="mt-5 h-100">
            <Row>
                <Col className="text-center">
                    <h4>Admin Console</h4>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Tabs
                        defaultActiveKey={defaultTab}
                        transition={true}
                        className="mb-3">

                        <Tab eventKey="pending" title="Pending Approval" onClick={() => setDefaultTab("pending")}>
                            <AdminTable />
                        </Tab>

                        <Tab eventKey="approvalNotRequired" title="Approval Not Required" onClick={() => setDefaultTab("approvalNotRequired")}>
                            test
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
};

export default AdminConsole;