import { Tooltip } from "@mui/material";
import { GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { formatDate, randomDate } from "../../../common/dateHelpers";

const today = new Date();
const lastYear = new Date(new Date(today).setFullYear(today.getFullYear() - 1));

const getCompanyNameFromUrl = () => {
    const urlParts = window.location.href.split("/");
    return urlParts[urlParts.length-1];
}

export const historyData = {
    columns: [
        {
            field: "date",
            headerName: "Date",
            width: 200,
            editable: false,
            valueFormatter: (params: GridValueGetterParams) => {
                return formatDate(params.value);
            },
            renderCell: (params: GridRenderCellParams<string>) => {
                return (
                    <Link to={`/${getCompanyNameFromUrl()}/${params.row.id}`}>{params.formattedValue}</Link>
                )
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
                    <Tooltip title={params.row.comments ?? ""} classes={{ popper: "companyPage-historyTable-comments-tooltip" }} placement="bottom-end">
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
            attachments: 2,
            comments: "Vivamus orci tortor, elementum vitae orci dignissim, congue facilisis turpis."
        },
        {
            id: "3",
            date: randomDate(today, lastYear),
            attachments: 0,
            comments: "Pellentesque vitae ipsum ligula. Nam imperdiet, urna ut consequat varius, tellus ante dignissim ex, porttitor luctus nibh erat id lectus. Nullam ac lectus et dui ultricies maximus ut ac nibh. Suspendisse potenti. Sed tempor venenatis cursus. Phasellus urna lorem, vulputate id bibendum dictum, tristique vel nisi. Aliquam diam ex, euismod at placerat sit amet, vehicula sed diam. Proin in risus diam. Duis id ex ex. Nullam finibus, leo at pulvinar varius, nibh nulla sollicitudin nisi, id ullamcorper augue massa sit amet felis. Sed interdum, tortor ac ornare imperdiet, augue sem laoreet lacus, et dictum mi turpis non metus. Duis volutpat dolor at felis vulputate, at eleifend nisl lacinia. Sed eget fringilla mauris, id maximus enim. Nam dignissim, arcu vel tincidunt ultrices, justo nisi accumsan ipsum, quis accumsan libero ante vitae dui. Duis a consequat lorem."
        },
        {
            id: "4",
            date: randomDate(today, lastYear),
            attachments: 3,
            comments: "Duis eu eleifend erat. Nunc vitae efficitur velit, aliquet tristique nunc. Sed et finibus dolor. Nullam gravida cursus efficitur. Integer aliquet rhoncus dolor nec congue. Phasellus placerat urna at est gravida sagittis in id velit. Morbi malesuada finibus mauris sed ullamcorper. Aliquam sapien arcu, dignissim eget condimentum ut, varius vel dui. Aenean scelerisque urna in rutrum sollicitudin. Nullam dictum leo diam, a vulputate odio consequat eget. Sed a pulvinar ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue ante, vestibulum ut volutpat ut, iaculis a erat. Donec gravida semper justo non congue. Maecenas bibendum nulla orci, et suscipit turpis tempus in. Nunc dolor mi, pulvinar eu nisi eget, pretium auctor massa."
        },
        {
            id: "5",
            date: randomDate(today, lastYear),
            attachments: 2,
            comments: "Nulla eget accumsan nisl, eget maximus nulla."
        },
        {
            id: "6",
            date: randomDate(today, lastYear),
            attachments: 4
        }
    ]
}