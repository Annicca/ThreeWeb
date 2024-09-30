export const getId = (array) => {
    return Math.max(...array.map((obj) => obj.id)) + 1;
}