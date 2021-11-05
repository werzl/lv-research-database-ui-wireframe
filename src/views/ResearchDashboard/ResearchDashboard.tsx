import React from "react";
import { security } from "../../models/security";

export interface ResearchDashboardProps {
    allowEdit?: boolean,
    isStatusBarVisible?: boolean,
    securities?: security[],
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