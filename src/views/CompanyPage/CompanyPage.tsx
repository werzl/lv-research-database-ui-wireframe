import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { FMV } from "../../types/FMV";
import "./CompanyPage.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CompanyPageRating from "./Tabs/Rating/CompanyPageRating";
import ResearchEntriesTable from "./Tabs/ResearchEntries/ResearchEntriesTable";
import { researchEntriesData } from "./Tabs/ResearchEntries/researchEntriesData";
import PriceHistory from "./Tabs/PriceHistory/PriceHistory";

import ResearchEntry from "./ResearchEntry/ResearchEntry";
import NewResearchEntry from "./NewResearchEntry/NewResearchEntry";
import { LinkContainer } from "react-router-bootstrap";

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
            <Route path={`/${props.companyName.replaceAll(" ", "")}/NewResearchEntry`}>
                <NewResearchEntry
                    companyName={props.companyName}
                    dateAdded={new Date()} />
            </Route>

            {researchEntriesData.map(row => {
                return (
                    <Route path={`/${props.companyName.replaceAll(" ", "")}/${row.sourceId}`} key={row.sourceId}>
                        <ResearchEntry
                            companyName={props.companyName}
                            dateAdded={row.date}
                            id={row.sourceId}
                            comments={row.comments ?? ""} />
                    </Route>
                )
            })}

            <Route path={path}>
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                    <LinkContainer to="/">
                                        <p className="companyPage-breadcrumb-link">Securities</p>
                                    </LinkContainer>
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
                            <div className="companyPage-companyStats">
                                <Row className="w-100">
                                    <Col lg={3} className="companyStat">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Ticker</TableCell>
                                                    <TableCell>Primary Analyst</TableCell>
                                                    <TableCell>Price</TableCell>
                                                    <TableCell>Currency</TableCell>
                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>{props.ticker}</TableCell>
                                                    <TableCell>{props.primaryAnalyst}</TableCell>
                                                    <TableCell>30</TableCell>
                                                    <TableCell>EUR</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Col>

                                    <Col lg={3} className="companyStat">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Quality</TableCell>
                                                    <TableCell>Fundamentals</TableCell>
                                                    <TableCell>FMV</TableCell>
                                                    <TableCell>FMV (Adjusted)</TableCell>
                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>1</TableCell>
                                                    <TableCell>2</TableCell>
                                                    <TableCell>100</TableCell>
                                                    <TableCell>150</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Col>

                                    <Col className="companyStat">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Forward P/E at Current Price</TableCell>
                                                    <TableCell>Forward P/E at FMV</TableCell>
                                                    <TableCell>Forward P/E at Adjusted FMV</TableCell>
                                                    <TableCell>Upside to Adjusted FMV</TableCell>
                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>25.64</TableCell>
                                                    <TableCell>50.3</TableCell>
                                                    <TableCell>55.2</TableCell>
                                                    <TableCell>35%</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>


                    <Row className="mt-5">
                        <Col>
                            <Tabs
                                defaultActiveKey={defaultTab}
                                transition={true}
                                className="mb-3">

                                <Tab eventKey="rating" title="Rating" onClick={() => setDefaultTab("rating")}>
                                    <CompanyPageRating fmv={props.fmv} researchEntryLink={`/${props.companyName.replaceAll(" ", "")}/sourceid1`} />
                                </Tab>

                                <Tab eventKey="entries" title="Research Entries" onClick={() => setDefaultTab("entries")}>
                                    <ResearchEntriesTable />
                                </Tab>

                                <Tab eventKey="price" title="Price History" onClick={() => setDefaultTab("price")}>
                                    <PriceHistory />
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