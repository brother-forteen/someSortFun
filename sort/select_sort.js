let selectSort = (arr) => {
    console.log("选择排序,正序,嵌套了两层循环，其时间复杂度是O(n^2)");
    let len = arr.length;
    if(len){
        for(let i = 0;i < len-1;i++){
            let min = i;
            for(let j = i+1;j < len;j++){
                if(arr[min] > arr[j]){
                    min = j;
                }
            }
            if(min !== i){
                [arr[i],arr[min]] = [arr[min],arr[i]];
            }
        }
    }
    return arr;
};

export default selectSort;