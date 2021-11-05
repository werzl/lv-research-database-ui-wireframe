import React from "react";
import { Security } from "../../models/Security";

export interface ResearchDashboardProps {
    allowEdit?: boolean,
    isStatusBarVisible?: boolean,
    securities?: Security[],
    displayName?: string
}

export type TResearchDashboard = React.ReactElement<ResearchDashboardProps>;

const ResearchDashboard = () => {
    return (
        <div>
            
            <div>Dashboard</div>
        </div>
    )
}

export default ResearchDashboard;