import { Tooltip } from "@mui/material";
import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
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
            width: 125,
            headerClassName: "companyPage-historyTable-attachments",
            cellClassName: "companyPage-historyTable-attachments"
        },
        {
            field: "comments",
            headerName: "Comments",
            width: 550,
            renderCell: (params: GridRenderCellParams<string>) => {
                return (
                    <Tooltip title={params.row.comments}>
                        <div className="companyPage-historyTable-comments-cell">{params.row.comments}</div>
                    </Tooltip>
                )
            }
        }
    ],
    rows: [
        {
            id: "1",
            date: today,
            attachments: 1,
            comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, risus non finibus commodo, erat purus finibus risus, sed blandit dolor magna quis dui. Pellentesque eget rutrum urna. Praesent rutrum, sem non sagittis bibendum, tellus nisi aliquet augue, eu blandit ex metus id nisl. Nulla et lobortis mauris. Nam molestie arcu id tellus lobortis euismod. Nunc eget commodo neque. Integer sollicitudin dignissim ante, sed venenatis lectus semper non. Sed at luctus ligula."
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