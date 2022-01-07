import React, { useCallback } from "react";
import { Card } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export interface AttachmentDropZoneProps{
    upload: (files: any) => void
}

const AttachmentDropZone = (props: AttachmentDropZoneProps) => {
    const onDrop = useCallback(files => {
        props.upload(files);
    }, [props]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="companyPage-researchEntry-AttachmentDropZone-container">
            <Card className={`companyPage-researchEntry-AttachmentDropZone-card ${isDragActive ? "dragActive" : ""}`}>
                <Card.Header className="companyPage-researchEntry-AttachmentDropZone-cardHeader">
                    <h2><CloudUploadIcon width={100} /> Upload</h2>
                </Card.Header>

                <Card.Body {...getRootProps()} className="companyPage-researchEntry-AttachmentDropZone-cardBody">
                    <input {...getInputProps()} />
                    Drag and drop files here<br />
                    or <b>click</b> to browse.
                </Card.Body>
            </Card>
        </div>
    );
};

export default AttachmentDropZone;