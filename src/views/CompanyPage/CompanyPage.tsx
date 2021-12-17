import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab, Breadcrumb, Card } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { FMV } from "../../types/FMV";
import "./CompanyPage.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CompanyPageRating from "./Rating/CompanyPageRating";
import HistoryTable from "./History/HistoryTable";
import { historyData } from "./History/historyData";
import ResearchEntry from "./ResearchEntry/ResearchEntry";
import PriceGraph from "./Price/PriceGraph";

export interface CompanyPageProps {
    companyName: string,
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    fmv: FMV
}

const CompanyPage = (props: CompanyPageProps) => {
    const { path } = useRouteMatch();
    const [defaultTab, setDefaultTab] = useState<"rating" | "entries" | "price" | "timeline">("rating");

    return (
        <Switch>
            {historyData.rows.map(row => {
                return (
                    <Route path={`/${props.companyName.replaceAll(" ", "")}/${row.id}`}>
                        <ResearchEntry
                            companyName={props.companyName}
                            dateAdded={row.date}
                            id={row.id}
                            comments={row.comments ?? ""} />
                    </Route>
                )
            })}

            <Route path={path}>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <Link to="/">
                                        Securities
                                    </Link>
                                </Breadcrumb.Item>

                                <Breadcrumb.Item active>
                                    {props.companyName}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col className="text-center">
                            <h1>{props.companyName}</h1>
                        </Col>
                    </Row>

                    {/* <Row>
                        <Col className="text-center">
                            <span className="companyPage-tagLine">
                                <p>
                                    <b>Ticker:</b> {props.ticker}  |
                                    &nbsp;<b>Price:</b> {props.price} |
                                    &nbsp;<b>Currency:</b> {props.currency}
                                </p>
                            </span>
                        </Col>
                    </Row> */}

                    <Row className="mt-3">
                        <Col>
                            <Card className="companyPage-companyStats">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Ticker</TableCell>
                                                        <TableCell>Primary Analyst</TableCell>
                                                        <TableCell>Price</TableCell>
                                                        <TableCell>Currency</TableCell>
                                                        <TableCell>Forward P/E at Current Price</TableCell>
                                                        <TableCell>Forward P/E at FMV</TableCell>
                                                        <TableCell>Forward P/E at Adjusted FMV</TableCell>
                                                        <TableCell>Upside to Adjusted FMV</TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>{props.ticker}</TableCell>
                                                        <TableCell>{props.primaryAnalyst}</TableCell>
                                                        <TableCell>30</TableCell>
                                                        <TableCell>EUR</TableCell>
                                                        <TableCell>25.64</TableCell>
                                                        <TableCell>50.3</TableCell>
                                                        <TableCell>55.2</TableCell>
                                                        <TableCell>35%</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* <Row className="mt-3">
                        <Col>
                            <Card className="companyPage-companyInfo">
                                <Card.Body>
                                    <Row>
                                        <Col lg={3}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell colSpan={4} className="text-center">FMV</TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell>Raw</TableCell>
                                                        <TableCell>Adjusted</TableCell>
                                                        <TableCell>Date</TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Approved</TableCell>
                                                        <TableCell>100</TableCell>
                                                        <TableCell>150</TableCell>
                                                        <TableCell>{props.fmv.approved.raw.timestamp.toLocaleDateString()}</TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell>Pending</TableCell>
                                                        <TableCell>100</TableCell>
                                                        <TableCell>160</TableCell>
                                                        <TableCell>{props.fmv.approved.raw.timestamp.toLocaleDateString()}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Col>

                                        <Col></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}

                    <Row className="mt-5">
                        <Col>
                            <Tabs
                                defaultActiveKey={defaultTab}
                                transition={true}
                                className="mb-3">

                                <Tab eventKey="rating" title="Rating" onClick={() => setDefaultTab("rating")}>
                                    <CompanyPageRating fmv={props.fmv} researchEntryLink={`/${props.companyName.replaceAll(" ", "")}/1`} />
                                </Tab>

                                <Tab eventKey="entries" title="Research Entries" onClick={() => setDefaultTab("entries")}>
                                    <HistoryTable companyName={props.companyName} />
                                </Tab>

                                <Tab eventKey="price" title="Price History" onClick={() => setDefaultTab("price")}>
                                    <PriceGraph />
                                </Tab>

                                {/* <Tab eventKey="timeline" title="Timeline" onClick={() => setDefaultTab("timeline")}>
                                    Timeline
                                </Tab> */}
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </Route>
        </Switch>
    );
}

export default CompanyPage;