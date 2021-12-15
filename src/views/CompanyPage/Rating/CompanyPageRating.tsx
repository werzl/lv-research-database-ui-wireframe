import React from "react";

import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import Check from "@mui/icons-material/Check";
import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from "@mui/material";

import RatingCard from "../../../components/rating/RatingCard";

const CompanyPageRating = () => {
    return (
        <div className="mt-5">
            <Row>
                <Col lg={3}>
                    <RatingCard heading="Quality" value={1} icon={<Check className="companyPage-rating-card-check" />} />
                </Col>

                <Col lg={3}>
                    <RatingCard heading="Fundamentals" value={2} icon={<BarChartIcon className="companyPage-rating-card-fundamentals" />} />
                </Col>

                <Col lg={3}>
                    <RatingCard heading="FMV" value={15} icon={<SsidChartIcon className="companyPage-rating-card-fmv" />} />
                </Col>

                <Col lg={3}>
                    <Tooltip title="Most recently approved ratings." classes={{ popper: "companyPage-rating-info-tooltip" }} placement="top">
                        <div style={{ cursor: "pointer", width: "10%" }}><InfoIcon /></div>
                    </Tooltip>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <div className="companyPage-rating-pending-approval-div text-center">
                        <h5>Pending</h5>
                        <hr />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Form>
                            <Table className="companyPage-rating-table text-center">
                                <thead>
                                    <tr>
                                        <td><h6>Quality</h6></td>
                                        <td><h6>FMV</h6></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>21</td>
                                    </tr>
                                    <tr>
                                        <td><Button variant="outline-primary">Approve</Button></td>
                                        <td><Button variant="outline-primary">Approve</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Form>
                    </Card>
                </Col>

                <Col lg={3} className="text-center">
                    <Button variant="outline-primary" className="companyPage-rating-approveAll-button">Approve All</Button>
                </Col>

            </Row>
        </div>
    );
}

export default CompanyPageRating;