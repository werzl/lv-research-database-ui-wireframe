import React from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Check } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CompanyStats from "../../../components/CompanyStats/CompanyStats";
import RatingCard from "../../../components/rating/RatingCard";
import { FMV } from "../../../types/FMV";
import { Attachment } from "../../../types/ResearchEntry";

export interface ResearchEntryProps {
    id: string,
    companyName: string,
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    dateAdded: Date,
    attachments: {
        count: number,
        list: Attachment[]
    },
    quality: 0 | 1 | 2 | 3,
    fundamentals: 0 | 1 | 2 | 3,
    fmv: FMV,
    comments: string
}

const ResearchEntry = (props: ResearchEntryProps) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <LinkContainer to="/">
                                <p className="companyPage-breadcrumb-link">Securities</p>
                            </LinkContainer>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            <LinkContainer to={`/${props.companyName.replaceAll(" ", "")}`}>
                                <p className="companyPage-breadcrumb-link">{props.companyName}</p>
                            </LinkContainer>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active>
                            {props.dateAdded.toLocaleDateString()}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col className="text-center">
                    <h1>{props.companyName}</h1>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <CompanyStats
                        ticker={props.ticker}
                        primaryAnalyst={props.primaryAnalyst}
                        price={props.price}
                        currency={props.currency}
                        quality={props.quality}
                        fundamentals={props.fundamentals}
                        fmv={props.fmv} />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <Row>
                        <Col>
                            {/* Ratings */}
                            <Row className="mb-3">
                                <Col lg={1}></Col>

                                <Col lg={3}>
                                    <RatingCard
                                        heading="Quality"
                                        value={props.quality}
                                        icon={<Check className="companyPage-rating-card-check" />} />

                                    <Button className="w-100 mt-3 border-0" variant="outline-success" disabled>Approved</Button>
                                </Col>

                                <Col lg={3}>
                                    <RatingCard
                                        heading="Fundamentals"
                                        value={2}
                                        icon={<BarChartIcon className="companyPage-rating-card-fundamentals" />} />

                                    <Button className="w-100 mt-3 border-0" variant="outline-primary">Approve</Button>
                                </Col>

                                <Col lg={3}>
                                    <RatingCard
                                        heading="FMV"
                                        value={props.fmv.approved.raw.value}
                                        icon={<ShowChartIcon className="companyPage-rating-card-fmv" />} />

                                    <Button className="w-100 mt-3 border-0" variant="outline-success" disabled>Approved</Button>
                                </Col>
                            </Row>


                            {/* Attachments */}
                            <Accordion defaultExpanded>
                                <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                    <h4>Attachments</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Row className="mt-3">
                                        <Col lg={1}></Col>
                                        <Col lg={10}>
                                            <Table className="attachments-table w-100">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Filename</TableCell>
                                                        <TableCell>Type</TableCell>
                                                        <TableCell>Description</TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    {props.attachments.count ? props.attachments.list.map(attachment => (
                                                        <TableRow key={Math.random().toString()}>
                                                            <TableCell className="align-top filename">
                                                                <a href={window.location.href}>{attachment.filename}</a>
                                                            </TableCell>
                                                            <TableCell className="w-25 align-top">
                                                                {attachment.type}
                                                            </TableCell>

                                                            <TableCell className="align-top">
                                                                {attachment.description}
                                                            </TableCell>

                                                            <TableCell className="companyPage-newReserachEntry-uploadedAttachments-delete-icon-cell">
                                                                {/* <Button variant="outline-danger" onClick={() => props.onDeleteAttachment(attachment.filename)}><DeleteForeverIcon /></Button> */}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))

                                                        :

                                                        <TableRow>
                                                            <TableCell className="text-center text-secondary py-2" colSpan={4}>
                                                                <h6>No attachments were found.</h6>
                                                            </TableCell>
                                                        </TableRow>
                                                    }
                                                </TableBody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </AccordionDetails>
                            </Accordion>



                            {/* FMV */}
                            {/* <Accordion defaultExpanded>
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>FMV</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FmvForm fmv={props.fmv} />
                                    </AccordionDetails>
                                </Accordion> */}



                            {/* Comments */}
                            <Accordion defaultExpanded={props.comments !== ""} className="mb-5">
                                <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                    <h4>Comments</h4>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>{props.comments}</p>
                                </AccordionDetails>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ResearchEntry;