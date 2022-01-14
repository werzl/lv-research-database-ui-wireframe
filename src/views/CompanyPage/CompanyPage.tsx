import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { FMV } from "../../types/FMV";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import CompanyPageRating from "./Tabs/Rating/CompanyPageRating";
import ResearchEntriesTable from "./Tabs/ResearchEntries/ResearchEntriesTable";
import { researchEntriesData } from "./Tabs/ResearchEntries/researchEntriesData";
import PriceHistory from "./Tabs/PriceHistory/PriceHistory";

import ResearchEntry from "./ResearchEntry/ResearchEntry";
import NewResearchEntry from "./NewResearchEntry/NewResearchEntry";

import "./CompanyPage.scss";

export interface CompanyPageProps {
    companyName: string,
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    fmv: FMV,
    quality: 0 | 1 | 2 | 3,
    fundamentals: 0 | 1 | 2 | 3
}

const CompanyPage = (props: CompanyPageProps) => {
    const { path } = useRouteMatch();
    const [defaultTab, setDefaultTab] = useState<"rating" | "entries" | "price" | "timeline">("rating");

    return (
        <Switch>
            <Route path={`/${props.companyName.replaceAll(" ", "")}/NewResearchEntry`}>
                <NewResearchEntry
                    companyName={props.companyName}
                    ticker={props.ticker}
                    primaryAnalyst={props.primaryAnalyst}
                    price={props.price}
                    currency={props.currency}
                    dateAdded={new Date()}
                    quality={props.quality}
                    fundamentals={props.fundamentals}
                    fmv={props.fmv} />
            </Route>

            {researchEntriesData.map(row => {
                return (
                    <Route path={`/${props.companyName.replaceAll(" ", "")}/${row.sourceId}`} key={row.sourceId}>
                        <ResearchEntry
                            id={row.sourceId}
                            companyName={props.companyName}
                            ticker={props.ticker}
                            primaryAnalyst={props.primaryAnalyst}
                            price={props.price}
                            currency={props.currency}
                            dateAdded={row.date}
                            attachments={row.attachments}
                            quality={2}
                            fundamentals={3}
                            fmv={props.fmv}
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
                            <CompanyStats
                                ticker={props.ticker}
                                primaryAnalyst={props.primaryAnalyst}
                                price={props.price}
                                currency={props.currency}
                                quality={1}
                                fundamentals={2}
                                fmv={props.fmv} />
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