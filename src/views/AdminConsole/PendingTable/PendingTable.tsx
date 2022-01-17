import React, { useState } from "react";

import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse } from "@mui/material";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AdminPendingEntry } from "../../../types/AdminConsole";
import RatingDataTable from "./RatingDataTable/RatingDataTable";
import { pendingTableData } from "./pendingTableData";

const PendingTableRow = (props: AdminPendingEntry) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<>
			<TableRow className="pendingTableRow" onClick={() => setOpen(!open)}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>

				<TableCell>
					<Link to={`/${props.security.replaceAll(" ", "")}`}>{props.security}</Link>
				</TableCell>

				<TableCell>
					{props.ticker}
				</TableCell>
			</TableRow>

			<TableRow>
				<TableCell colSpan={6} className="p-0">
					<Collapse in={open} timeout="auto" unmountOnExit className="attachments-collapse">
						<Row className="m-5 mt-1">
							<RatingDataTable title="Quality" data={props.quality} />

							<RatingDataTable title="Fundamentals" data={props.fundamentals} />

							<RatingDataTable title="FMV" data={props.fmv} />
						</Row>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}

const PendingTable = () => {
	return (
		<div className="companyPage-historyTable-adminTable-container">
			<Table size="small" className="w-100" stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell className="collapse-icon-header"></TableCell>
						<TableCell className="security-header">Security</TableCell>
						<TableCell className="ticker-header">Ticker</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{pendingTableData.map(row => (
						<PendingTableRow {...row} key={row.security} />
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PendingTable;