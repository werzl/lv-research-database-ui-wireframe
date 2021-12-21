export type Attachment = {
    filename: string,
    type: "Above Average" | "Below Average" | "Top 10" | "Top 10 Percentile"
        | "Bottom 10" | "Bottom 10 Percentile" | "ESG" | "NonStandard Model"
        | "Note" | "Other"
    description: string
}