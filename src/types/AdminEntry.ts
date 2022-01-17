export type RatingData = {
    value: number,
    updatedBy: string,
    updatedDate: Date
}

export type AdminEntry = {
    security: string,
    ticker: string,
    quality?: {
        approved: RatingData,
        unapproved: RatingData
    }
    fundamentals?: {
        approved: RatingData,
        unapproved: RatingData
    },
    fmv?: {
        approved: RatingData,
        unapproved: RatingData
    }
}