let insertionSort = (arr) => {
    console.log("插入排序,为正序时,执行效率最好，每次插入都不用移动前面的元素，其时间复杂度是O(n)；为反序时,执行效率最差，每次插入都要前面的元素后移，其时间复杂度是O(n^2)");
    console.log("由直接插入排序算法可知，我们在排序过程中，需要一个临时变量存储要插入的值，所以空间复杂度为 1 。");
    console.log("直接插入排序的过程中，不需要改变相等数值元素的位置，所以它是稳定的算法。 ");
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

export default insertionSort;