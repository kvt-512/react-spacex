export const getFormatedDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    month = month<10 ? `0${month}`: month;
    day = day<10 ? `0${day}` : day;

    const date = `${year}-${month}-${day}`;
    return date;
}