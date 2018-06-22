let generateArray = (len) =>{
    let arr = new Array(len);
    for(let i = 0;i < len;i++){
        arr[i] = Math.random();
    }
    return arr;
};
export default generateArray;