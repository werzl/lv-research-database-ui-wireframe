import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Form, Button } from "react-bootstrap";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import ProgressBar from "../../../../common/ProgressBar";

export type NewAttachment = {
    filename: string,
};

export interface UploadedAttachmentsProps {
    attachments: NewAttachment[],
    onDeleteAttachment: (filename: string) => void
}

const UploadedAttachments = (props: UploadedAttachmentsProps) => {
    return (
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
                {props.attachments.length ? props.attachments.map(attachment => (
                    <TableRow key={Math.random().toString()}>
                        <TableCell className="align-top">
                            {attachment.filename}<br />
                            <ProgressBar />
                        </TableCell>
                        <TableCell className="w-25 align-top">
                            <Form.Select className="mt-0" required>
                                <option value="">Please select...</option>
                                <option>Above Average</option>
                                <option>Below Average</option>
                                <option>Top 10</option>
                                <option>Top 10 Percentile</option>
                                <option>Bottom 10</option>
                                <option>Bottom 10 Percentile</option>
                                <option>ESG</option>
                                <option>NonStandard Model</option>
                                <option>Note</option>
                                <option>Other</option>
                            </Form.Select>
                        </TableCell>

                        <TableCell className="align-top">
                            <Form.Control style={{resize: "none"}} as="textarea" rows={5} placeholder="(Optional) write a short description..." />
                        </TableCell>

                        <TableCell className="companyPage-newReserachEntry-uploadedAttachments-delete-icon-cell">
                            <Button variant="outline-danger" onClick={() => props.onDeleteAttachment(attachment.filename)}><DeleteForeverIcon /></Button>
                        </TableCell>
                    </TableRow>
                ))

                    :

                    <TableRow>
                        <TableCell className="text-center text-secondary py-4" colSpan={4}>
                            <h5>Attachments will appear here.</h5>
                        </TableCell>
                    </TableRow>
                }
            </TableBody>
        </Table>
    )
};

export default UploadedAttachments;