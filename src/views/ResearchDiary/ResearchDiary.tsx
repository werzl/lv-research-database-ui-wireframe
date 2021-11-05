import React from "react";
import { DiaryItem } from "../../models/DiaryItem";

export interface ResearchDiaryProps {
    diaries: DiaryItem[]
}

export type TResearchDiary = React.ReactElement<ResearchDiaryProps>;

const ResearchDiary = () => {
    return (
        <div>
            <div>Diary</div>
        </div>
    )
}

export default ResearchDiary;