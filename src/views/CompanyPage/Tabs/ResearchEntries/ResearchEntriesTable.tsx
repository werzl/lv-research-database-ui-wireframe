import React, { useState } from "react";

import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, Tooltip } from "@mui/material";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import { TResearchEntry } from "../../../../types/ResearchEntry";
import { formatDate } from "../../../../common/dateHelpers";
import { getCompanyNameFromUrl } from "../../../../common/urlHelper";

import { researchEntriesData } from "./researchEntriesData";

const ResearchEntryRow = (props: TResearchEntry) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell>{props.sourceId}</TableCell>

                <TableCell>
                    <Link to={`/${getCompanyNameFromUrl()}/${props.sourceId}`}>{formatDate(props.date)}</Link>
                </TableCell>

                <TableCell className="ps-5">{props.attachments ? props.attachments.count : 0}</TableCell>

                <TableCell>
                    <p className="comments">
                        <Tooltip title={props.comments ?? ""} classes={{ popper: "companyPage-historyTable-comments-tooltip" }} placement="bottom-end">
                            <div className="companyPage-historyTable-comments-cell">{props.comments}</div>
                        </Tooltip>
                    </p>
                </TableCell>

                <TableCell></TableCell>
            </TableRow>

            <TableRow>
                <TableCell colSpan={6} className="p-0">
                    <Collapse in={open} timeout="auto" unmountOnExit className="attachments-collapse">
                        <Row className="m-5 mt-3">
                            <Col>
                                <h5 className="m-3 text-secondary">Attachments</h5>

                                <Table className="attachments-table w-100">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Filename</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Description</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {props.attachments ? props.attachments.list.map(attachment => (
                                            <TableRow>
                                                <TableCell><a href={window.location.href}>{attachment.filename}</a></TableCell>
                                                <TableCell>{attachment.type}</TableCell>
                                                <TableCell>{attachment.description}</TableCell>
                                            </TableRow>
                                        )) : <></>}
                                    </TableBody>
                                </Table>
                            </Col>
                        </Row>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

const ResearchEntriesTable = () => {
    return (
        <div className="companyPage-historyTable-researchEntriesTable-container">
            <Table size="small" className="w-100">
                <TableHead>
                    <TableRow>
                        <TableCell className="collapse-icon-header"></TableCell>
                        <TableCell className="sourceId-header">Source ID</TableCell>
                        <TableCell className="date-header">Date</TableCell>
                        <TableCell className="attachments-header">Total Attachments</TableCell>
                        <TableCell className="comments-header">Comments</TableCell>
                        <TableCell className="newEntry-header">
                            <LinkContainer to={`/${getCompanyNameFromUrl()}/NewResearchEntry`}>
                                <Button className="newEntryButton" variant="outline-primary">+</Button>
                            </LinkContainer>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {researchEntriesData.map(researchEntry => (
                        <ResearchEntryRow {...researchEntry} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ResearchEntriesTable;