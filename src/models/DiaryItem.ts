export interface DiaryItem {
    brokerName: string,
    categoryName: string,
    actionBy: string,
    actionDateTime: Date,
    meetingDate: Date,
    brokerFee: number,
    currency: string,
    securities: string,
    approveAt: Date,
    approvedBy: string,
    invoiceReceivedAt: Date,
    invoiceReceivedBy: string,
    invoicePaidAt: Date,
    invoicePaid: boolean,
    brokerEmail: string,
    isDeleted: boolean
}