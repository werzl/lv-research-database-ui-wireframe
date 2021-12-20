import * as React from 'react';
import {
    DataGrid,
    GridColumns,
    GridSortModel,
} from '@mui/x-data-grid';


import { researchEntriesData } from "./researchEntriesData";

export interface HistoryTableProps {
    companyName: string
}

function escapeRegExp(value: string) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}



export default function ResearchEntriesTable(props: HistoryTableProps) {
    const data = researchEntriesData;

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
                hideFooterPagination
                disableSelectionOnClick
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                density="compact"/>
        </div>
    );
}