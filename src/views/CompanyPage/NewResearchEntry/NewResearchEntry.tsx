import React, { useState } from "react";
import { Col, Container, Row, Breadcrumb, Form } from "react-bootstrap";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import { LinkContainer } from "react-router-bootstrap";
import SaveAsIcon from '@mui/icons-material/SaveAs';

import AttachmentDropZone from "./Attachments/AttachmentDropZone";
import UploadedAttachments, { NewAttachment } from "./Attachments/UploadedAttachments";

export interface NewResearchEntryProps {
    companyName: string,
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    dateAdded: Date
}

const NewResearchEntry = (props: NewResearchEntryProps) => {
    const [attachments, setAttachments] = useState<NewAttachment[]>([]);

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

        console.log("new entry submitted!");
    }

    return (
        <Container className="mt-5">
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

                                            <Row className="mt-3">
                                                <Col lg={1}></Col>
                                                <Col lg={10}>
                                                    <UploadedAttachments attachments={attachments} onDeleteAttachment={onDeleteAttachment} />
                                                </Col>
                                            </Row>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion defaultExpanded>
                                        <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                            <h4>Quality and Fundamentals</h4>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            Q F
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion defaultExpanded>
                                        <AccordionSummary className="border-bottom" expandIcon={<ExpandMoreIcon />}>
                                            <h4>FMV</h4>
                                        </AccordionSummary>
                                        <AccordionDetails>Test </AccordionDetails>
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