let heapSort = (arr) => {
    console.log("堆排序,时间复杂度O(nlogn))");
    console.log("不稳定排序 ");
    let len = arr.length;
    if(len){
        for(let i = 1;i < len;i++){
            let tmp = arr[i];
            let j;
            for(j = i-1;j >= 0 && tmp < arr[j];j--){
                arr[j+1] = arr[j];
            }
            arr[j+1] = tmp
        }
    }
    return arr;
};

export default heapSort;