export interface Security {
    ticker: string,
    securityName: string,
    securityId: number,
    commands: any[],
    isCommandVisible: boolean,
    isLocked: boolean,
    lockMessage: string
}