export const getCompanyNameFromUrl = () => {
    const urlParts = window.location.href.split("/");
    return urlParts[urlParts.length-1];
}