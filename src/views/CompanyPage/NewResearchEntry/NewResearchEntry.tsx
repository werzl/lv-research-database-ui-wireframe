import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { Col, Container, Row, Breadcrumb, Form } from "react-bootstrap";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import { LinkContainer } from "react-router-bootstrap";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Check } from "@mui/icons-material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AttachmentDropZone from "./Attachments/AttachmentDropZone";
import UploadedAttachments, { NewAttachment } from "./Attachments/UploadedAttachments";
import RatingCard from "../../../components/rating/RatingCard";
import { FMV } from "../../../types/FMV";

export interface NewResearchEntryProps {
    companyName: string,
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    dateAdded: Date,
    quality: 0 | 1 | 2 | 3,
    fundamentals: 0 | 1 | 2 | 3,
    fmv: FMV
}

const NewResearchEntry = (props: NewResearchEntryProps) => {
    const [attachments, setAttachments] = useState<NewAttachment[]>([]);
    const [saved, setSaved] = useState<boolean>(false);

    const handleUnsavedChanges = (event: any) => {
        event.preventDefault();
        return event.returnValue = "Are you sure you want to discard this entry? Your changes will be lost.";
    };

    useEffect(() => {
        window.addEventListener("beforeunload", handleUnsavedChanges);

        return function cleanup() {
            window.removeEventListener("beforeunload", handleUnsavedChanges);
        };
    });

    const upload = (files: any) => {
        console.info(files);

        try {
            // throw new Error("upload failed");

            setAttachments(
                [
                    ...attachments,
                    ...files.map((f: any) => {
                        return { filename: f.name };
                    })
                ]
            );
        }
        catch (e) {
            console.error(e, `Files:`, files);

            toast.error('There was an error uploading your attachment', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };

    const onDeleteAttachment = (attachment: string) => {
        setAttachments(attachments.filter(a => a.filename !== attachment));
    };


    const onSubmit = (e: any) => {
        e.preventDefault();

        setSaved(true);

        console.log("new entry submitted!");
    }

    return (
        <Container className="mt-5">
            <Prompt
                when={!saved}
                message="Are you sure you want to discard this entry? Your changes will be lost." />

            <Form onSubmit={onSubmit}>

                <div className="float">
                    <button className="float-button" type="submit"><SaveAsIcon /></button>
                </div>

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
                                New Research Entry
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
                                                <TableCell>{props.price}</TableCell>
                                                <TableCell>{props.currency}</TableCell>
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
                                                <TableCell>{props.quality}</TableCell>
                                                <TableCell>{props.fundamentals}</TableCell>
                                                <TableCell>{props.fmv.approved.raw.value}</TableCell>
                                                <TableCell>{props.fmv.approved.adjusted.value}</TableCell>
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
                        <Row>
                            <Col>
                                {/* Ratings */}
                                <Row className="mb-3">
                                    <Col lg={1}></Col>

                                    <Col lg={3}>
                                        <RatingCard
                                            heading="Quality"
                                            value={props.quality}
                                            icon={<Check className="companyPage-rating-card-check" />}
                                            editable
                                            required />
                                    </Col>

                                    <Col lg={3}>
                                        <RatingCard
                                            heading="Fundamentals"
                                            value={props.fundamentals}
                                            icon={<BarChartIcon className="companyPage-rating-card-fundamentals" />}
                                            editable
                                            required />
                                    </Col>

                                    <Col lg={3}>
                                        <RatingCard
                                            heading="FMV"
                                            value={props.fmv.approved.raw.value}
                                            icon={<ShowChartIcon className="companyPage-rating-card-fmv" />}
                                            editable
                                            required />
                                    </Col>
                                </Row>



                                {/* Attachments */}
                                <Accordion defaultExpanded>
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>Attachments</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Row>
                                            <Col className="text-center">
                                                <AttachmentDropZone upload={upload} />
                                            </Col>
                                        </Row>

                                        <Row className="mt-3">
                                            <Col lg={1}></Col>
                                            <Col lg={10}>
                                                <UploadedAttachments attachments={attachments} onDeleteAttachment={onDeleteAttachment} />
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
                                <Accordion defaultExpanded className="mb-5">
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>Comments</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Form.Control as="textarea" rows={10} placeholder="(Optional) add your comments here..." />
                                    </AccordionDetails>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default NewResearchEntry;