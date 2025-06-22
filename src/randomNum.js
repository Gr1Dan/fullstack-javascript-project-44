export const randomNum = () => Math.round(Math.random() * 101);


export const randomNumOf10 = () => Math.round(Math.random() * 11);


export const randomItemOfArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};


export const randomNumAndItemOfArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return [randomIndex, arr[randomIndex]];
};