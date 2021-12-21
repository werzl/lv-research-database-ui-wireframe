import React from "react";

import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Check from "@mui/icons-material/Check";
import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from "@mui/material";

import { FMV } from "../../../../types/FMV";
import RatingCard from "../../../../components/rating/RatingCard";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface CompanyPageRatingProps {
    fmv: FMV,
    researchEntryLink: string
}

const CompanyPageRating = (props: CompanyPageRatingProps) => {
    return (
        <div className="mt-5">
            <Row className="mt-5">
                <Col>
                    <div className="companyPage-rating-pending-approval-div text-center">
                        <h5>Approved</h5>
                        <hr />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                    <RatingCard heading="Quality" value={1} icon={<Check className="companyPage-rating-card-check" />} />
                </Col>

                <Col lg={3}>
                    <RatingCard heading="Fundamentals" value={2} icon={<BarChartIcon className="companyPage-rating-card-fundamentals" />} />
                </Col>

                <Col lg={3}>
                    <RatingCard heading="FMV" value={props.fmv.approved.raw.value} icon={<ShowChartIcon className="companyPage-rating-card-fmv" />} />
                </Col>

                <Col lg={3}>
                    <RatingCard heading="FMV (Adjusted)" value={props.fmv.approved.adjusted.value} icon={<SsidChartIcon className="companyPage-rating-card-fmv" />} />
                </Col>

                <Col lg={3}>
                    <Tooltip title="Most recently approved ratings." classes={{ popper: "companyPage-rating-info-tooltip" }} placement="top">
                        <div style={{ cursor: "pointer", width: "10%" }}><InfoIcon /></div>
                    </Tooltip>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col lg={3}>
                    <p>
                        The above information is from the most recently approved research entry. FMV was updated on {props.fmv.approved.raw.timestamp.toLocaleDateString()}.
                        <br /><br />
                        You can view the most recently approved research entry <Link to={props.researchEntryLink}>here</Link>.
                    </p>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Table className="companyPage-rating-approved-rates-table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Discount Rate</TableCell>
                                        <TableCell>Terminal Growth Rate</TableCell>
                                        <TableCell>Upside to Adjusted FMV</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>{props.fmv.approved.adjusted.dr}%</TableCell>
                                        <TableCell>{props.fmv.approved.adjusted.tg}%</TableCell>
                                        <TableCell>35%</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Card.Body>
                    </Card>
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
                <Col lg={10}>
                    <Card>
                        <Form>
                            <Table className="companyPage-rating-table text-center">
                                <thead>
                                    <tr>
                                        <td><h6>Quality</h6></td>
                                        <td><h6>Fundamentals</h6></td>
                                        <td><h6>FMV</h6></td>
                                        <td><h6>FMV (Adjusted)</h6></td>
                                        <td><h6>Discount Rate</h6></td>
                                        <td><h6>Terminal Growth Rate</h6></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>100</td>
                                        <td>150</td>
                                        <td>8%</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td><Button variant="outline-primary">Approve</Button></td>
                                        <td><Button variant="outline-primary">Approve</Button></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Form>
                    </Card>
                </Col>

                <Col lg={2} className="text-center">
                    <Button variant="outline-primary" className="companyPage-rating-approveAll-button">Approve All</Button>
                </Col>

            </Row>
        </div>
    );
}

export default CompanyPageRating;