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

export default function ResearchEntriesTable(props: HistoryTableProps) {
    const data = researchEntriesData;

    const [rows, setRows] = React.useState(data.rows);
    const [sortModel, setSortModel] = React.useState<GridSortModel>([
        {
            field: 'date',
            sort: 'desc',
        },
    ]);

    React.useEffect(() => {
        setRows(data.rows);
    }, [data.rows]);

    return (
        <div className="companyPage-historyTable-dataGrid">
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={data.columns as GridColumns}
                hideFooterSelectedRowCount
                hideFooterPagination
                disableSelectionOnClick
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                density="compact"/>
        </div>
    );
}