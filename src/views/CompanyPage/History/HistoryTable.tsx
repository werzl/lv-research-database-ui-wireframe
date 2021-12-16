import * as React from 'react';
//import IconButton from '@mui/material/IconButton';
//import TextField from '@mui/material/TextField';
import {
    DataGrid,
    GridColumns,
    GridSortModel,
    //GridToolbarDensitySelector,
    //GridToolbarFilterButton,
} from '@mui/x-data-grid';
//import ClearIcon from '@mui/icons-material/Clear';
//import SearchIcon from '@mui/icons-material/Search';
//import { createTheme } from '@mui/material/styles';
//import { createStyles, makeStyles } from '@mui/styles';

import { historyData } from "./historyData";

export interface HistoryTableProps {
    companyName: string
}

function escapeRegExp(value: string) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

//const defaultTheme = createTheme();
// const useStyles = makeStyles(
//     (theme) =>
//         createStyles({
//             root: {
//                 padding: theme.spacing(0.5, 0.5, 0),
//                 justifyContent: 'space-between',
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 flexWrap: 'wrap',
//             },
//             textField: {
//                 [theme.breakpoints.down('xs')]: {
//                     width: '100%',
//                 },
//                 margin: theme.spacing(1, 0.5, 1.5),
//                 '& .MuiSvgIcon-root': {
//                     marginRight: theme.spacing(0.5),
//                 },
//                 '& .MuiInput-underline:before': {
//                     borderBottom: `1px solid ${theme.palette.divider}`,
//                 },
//             },
//         }),
//     { defaultTheme },
// );

// function QuickSearchToolbar(props: any) {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <div>
//                 <GridToolbarFilterButton />
//                 <GridToolbarDensitySelector />
//             </div>
//             <TextField
//                 variant="standard"
//                 value={props.value}
//                 onChange={props.onChange}
//                 placeholder="Search…"
//                 className={classes.textField}
//                 InputProps={{
//                     startAdornment: <SearchIcon fontSize="small" />,
//                     endAdornment: (
//                         <IconButton
//                             title="Clear"
//                             aria-label="Clear"
//                             size="small"
//                             style={{ visibility: props.value ? 'visible' : 'hidden' }}
//                             onClick={props.clearSearch}
//                         >
//                             <ClearIcon fontSize="small" />
//                         </IconButton>
//                     ),
//                 }}
//             />
//         </div>
//     );
// }


export default function CompaniesTable(props: HistoryTableProps) {
    // const { data } = useDemoData({
    // 	dataSet: 'Commodity',
    // 	rowLength: 100,
    // 	maxColumns: 6,
    // });

    const data = historyData;

    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState(data.rows);
    const [sortModel, setSortModel] = React.useState<GridSortModel>([
        {
            field: 'date',
            sort: 'desc',
        },
    ]);

    const requestSearch = (searchValue: string) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = data.rows.filter((row: any) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    React.useEffect(() => {
        setRows(data.rows);
    }, [data.rows]);

    return (
        <div className="companyPage-historyTable-dataGrid">
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={data.columns as GridColumns}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event: any) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
                hideFooterSelectedRowCount
                disableSelectionOnClick
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)} />
        </div>
    );
}