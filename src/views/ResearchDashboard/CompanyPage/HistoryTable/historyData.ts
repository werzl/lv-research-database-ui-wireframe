import { GridValueGetterParams } from "@mui/x-data-grid";
import { formatDate, randomDate } from "../../../../common/dateHelpers";

const today = new Date();
const lastYear = new Date(new Date(today).setFullYear(today.getFullYear() - 1));

export const historyData = {
    columns: [
        {
            field: "date",
            headerName: "Date",
            width: 200,
            editable: false,
            valueFormatter: (params: GridValueGetterParams) => {
                return formatDate(params.value);
            }
        },
        {
            field: "attachments",
            headerName: "Attachments",
            width: 125
        }
    ],
    rows: [
        {
            id: "1",
            date: today,
            attachments: 1
        },
        {
            id: "2",
            date: randomDate(today, lastYear),
            attachments: 2
        },
        {
            id: "3",
            date: randomDate(today, lastYear),
            attachments: 0
        },
        {
            id: "4",
            date: randomDate(today, lastYear),
            attachments: 3
        },
        {
            id: "5",
            date: randomDate(today, lastYear),
            attachments: 2
        },
        {
            id: "6",
            date: randomDate(today, lastYear),
            attachments: 4
        }
    ]
}