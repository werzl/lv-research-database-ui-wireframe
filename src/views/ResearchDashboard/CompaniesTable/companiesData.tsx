import { GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { formatDate, randomFormattedDate } from "../../../common/dateHelpers";

const today = new Date();
const lastYear = new Date(new Date(today).setFullYear(today.getFullYear()-1));

export const companiesData = {
	columns: [
		{
			field: "ticker",
			headerName: "Ticker",
			width: 180,
			editable: false
		},
		{
			field: "security",
			headerName: "Security",
			width: 300,
			editable: false,
			renderCell: (params: GridRenderCellParams<string>) => {
				return (
					<Link to={`/${params.value.replaceAll(" ", "")}`}>{params.value}</Link>
				)
			}
		},
		{
			field: "dateAdded",
			headerName: "Date Added",
			width: 200,
			editable: false
		}
	],
	rows: [
		{
			id: "1U1 GR",
			ticker: "1U1 GR",
			security: "1&1 AG",
			dateAdded: formatDate(today)
		},
		{
			id: "TXG US",
			ticker: "TXG US",
			security: "10x Genomics Inc Class A",
			dateAdded: randomFormattedDate(today, lastYear)
		},
		{
			id: "ONEM US",
			ticker: "ONEM US",
			security: "1Life Healthcare Inc",
			dateAdded: randomFormattedDate(today, lastYear)
		},
		{
			id: "TWOU US",
			ticker: "TWOU US",
			security: "2U Inc",
			dateAdded: randomFormattedDate(today, lastYear)
		},
		{
			id: "2018 HK",
			ticker: "2018 HK",
			security: "AAC Technologies Holdings Inc",
			dateAdded: randomFormattedDate(today, lastYear)
		},
		{
			id: "ANL LN",
			ticker: "ANL LN",
			security: "Abbey National Plc",
			dateAdded: randomFormattedDate(today, lastYear)
		}
	]
}