import React, { useState } from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AttachmentDropZone from "./Attachments/AttachmentDropZone";
import UploadedAttachments, { NewAttachment } from "./Attachments/UploadedAttachments";

export interface NewResearchEntryProps {
    companyName: string,
    dateAdded: Date,
    // quality: 0 | 1 | 2 | 3,
    // fundamentals: 0 | 1 | 2 | 3,
    // fmv: number
}

const NewResearchEntry = (props: NewResearchEntryProps) => {
    const [attachments, setAttachments] = useState<NewAttachment[]>([]);

    const upload = (files: any) => {
        console.info(files);

        setAttachments(
            files.map((f: any) => {
                return { filename: f.name };
            })
        );
    };

    const onDeleteAttachment = (attachment: string) => {
        setAttachments(attachments.filter(a => a.filename !== attachment));
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">
                                Securities
                            </Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            <Link to={`/${props.companyName.replaceAll(" ", "")}`}>
                                {props.companyName}
                            </Link>
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
                    <div className="">
                        <Row>
                            <Col>
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

                                        <UploadedAttachments attachments={attachments} onDeleteAttachment={onDeleteAttachment} />
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion defaultExpanded>
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>Company Details</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>Test </AccordionDetails>
                                </Accordion>

                                <Accordion defaultExpanded>
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>Quality and Fundamentals</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>Test </AccordionDetails>
                                </Accordion>

                                <Accordion defaultExpanded>
                                    <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                        <h4>FMV</h4>
                                    </AccordionSummary>
                                    <AccordionDetails>Test </AccordionDetails>
                                </Accordion>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NewResearchEntry;