import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Form } from "react-bootstrap";

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
                </TableRow>
            </TableHead>

            <TableBody>
                {props.attachments ? props.attachments.map(attachment => (
                    <TableRow key={attachment.filename}>
                        <TableCell>
                            {attachment.filename}<br />
                            <ProgressBar />
                        </TableCell>
                        <TableCell className="w-25">
                            <Form.Select className="mt-3">
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

                        <TableCell>
                            <Form.Control className="" as="textarea" rows={4} placeholder="Write a short description..."/>
                        </TableCell>
                    </TableRow>
                ))

                    :

                    <TableRow>
                        <TableCell colSpan={3}>
                            Uploaded attachments will appear here.
                        </TableCell>
                    </TableRow>
                }
            </TableBody>
        </Table>
    )
};

export default UploadedAttachments;