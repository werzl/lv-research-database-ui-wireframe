export type FmvValues = {
    timestamp: Date,
    value: number,
    upside: number
}

export type AdjustedFmvValues = {
    timestamp: Date,
    value: number,
    upside: number,
    tg: number,
    dr: number
}

export type FMV = {
    approved: {
        raw: FmvValues,
        adjusted: AdjustedFmvValues
    },
    unapproved: {
        raw: FmvValues,
        adjusted: AdjustedFmvValues
    }
}