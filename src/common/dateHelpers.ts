export const formatDate = (date: Date): string => {
    return date.toLocaleString("en-GB");
};

export const randomDate = (start: Date, end: Date): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const randomFormattedDate = (start: Date, end: Date): string => {
    return formatDate(randomDate(start, end));
};