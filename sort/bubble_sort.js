let bubbleSort = (arr) => {
    // console.time("冒泡排序");
    console.log("冒泡排序，循环了两遍，这种方式的排序的时间复杂度为O(n^2)");
    let len = arr.length;
    if(len){
        for(let i = 0;i < len;i++){
            for(let j = 0;j < len-1-i;j++){
                if(arr[j] > arr[j+1]){
                    [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
                }
            }
        }
    }
    // console.timeEnd('冒泡排序');
    return arr;
};
export default bubbleSort;