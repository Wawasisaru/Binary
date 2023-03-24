// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6
function unsortedNumber(num,target){
    let left=0;
    let right=num.length -1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num[middle]=== target){
            return middle;
        }
        else if(num[middle]< target){
            left = middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return null
}
let num = [45,12,6,89,2,5]
let target = 6
console.log(unsortedNumber(num,target))
// Given an unsorted array of numbers return the sorted array in descending order
let arr3=[123,89,5,23,9,56]
let arr4 =arr3.sort(function(a,b){
    return a-b
})
let arr5=arr4.reverse();
console.log(arr5)
// Given the following array, search for the following target
function unsortedNumber(arr2,target2){
    let left=0;
    let right=num.length -1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (arr2[middle]=== target2){
            return middle;
        }
        else if(arr2[middle]< target2){
            left = middle+1;
        }
        else{
            right=middle-1;
        }
    }
    return null
}
let target2 = 34
let arr2 = [1,4,78,2,67,3];
console.log(unsortedNumber(arr2,target2))