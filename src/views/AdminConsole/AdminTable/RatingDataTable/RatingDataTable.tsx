import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { RatingData } from "../../../../types/AdminEntry";

export interface RatingDataProps {
    title: "Quality" | "Fundamentals" | "FMV",
    data?: {
        approved: RatingData,
        unapproved: RatingData
    }
}

const RatingDataTable = (props: RatingDataProps) => {
    return (
        <Col lg={4}>
            <Row>
                <Col>
                    <h5 className="m-2 text-secondary">{props.title}</h5>

                    {props.data &&
                        <Table className="attachments-table w-100">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="approval-header"></TableCell>
                                    <TableCell className="value-header"></TableCell>
                                    <TableCell>Updated By</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell>Approved</TableCell>
                                    <TableCell>{props.data.approved.value}</TableCell>
                                    <TableCell>{props.data.approved.updatedBy}</TableCell>
                                    <TableCell>{props.data.approved.updatedDate.toLocaleDateString()}</TableCell>
                                </TableRow>
                                <TableRow className="unapproved-row">
                                    <TableCell>Unapproved</TableCell>
                                    <TableCell>{props.data.unapproved.value}</TableCell>
                                    <TableCell>{props.data.unapproved.updatedBy}</TableCell>
                                    <TableCell>{props.data.unapproved.updatedDate.toLocaleDateString()}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    }
                </Col>
            </Row>

            {props.data &&
                <Row className="mt-3">
                    <Col lg={3} className="text-end">
                        <Button variant="outline-primary">Approve</Button>
                    </Col>

                    <Col className="text-start">
                        <Button variant="outline-primary">Approval Not Required</Button>
                    </Col>
                </Row>
            }
        </Col>
    )
};

export default RatingDataTable;