import React from "react";
import { Row, Col } from "react-bootstrap";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { FMV } from "../../types/FMV";

export interface CompanyStatsProps {
    ticker: string,
    primaryAnalyst: string,
    price: number,
    currency: string,
    fmv: FMV,
    quality: 0 | 1 | 2 | 3,
    fundamentals: 0 | 1 | 2 | 3
}

const CompanyStats = (props: CompanyStatsProps) => {
    return (
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
    );
};

export default CompanyStats;