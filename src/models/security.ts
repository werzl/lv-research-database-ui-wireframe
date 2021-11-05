export interface security {
    ticker: string,
    securityName: string,
    securityId: number,
    commands: any[],
    isCommandVisible: boolean,
    isLocked: boolean,
    lockMessage: string
}