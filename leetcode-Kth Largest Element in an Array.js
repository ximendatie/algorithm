/**
 * Author： 何童鞋
 * Problem：215. Kth Largest Element in an Array 
 * Algorithm：开辟K长度数组，折半插入排序
 * Time Complexity：O(nlgK)
 * Space Complexity：O(n)
 * Beats: 83.21%
 */
var findKthLargest = function(nums, k) {
    if(nums.length == 1){
        return nums[0];
    }
    else{
        var kArr = new Array();
        kArr[0] = nums[0];
        for(var i = 1; i < nums.length; i++)//堆每个数字进行插入排序
            insertSort(kArr,nums[i],k);      
        return kArr[k-1];
    }
};
function insertSort(kArr, a, k){ //降序，折半插入排序
    var len = kArr.length;
    var left = 0, right = len-1;
    if(a >= kArr[left])
        kArr.splice(0,0,a);
    else if(a <= kArr[right])
        var temp = kArr.push(a);
    else{
        var pl = Math.floor((left + right)/2);
        while(pl != left && kArr[pl] != a){
            if(a > kArr[pl])
                right = pl;
            else
                left = pl;
            pl = Math.floor((left + right)/2);    
        }
        kArr.splice(pl+1,0,a);
    }
   if(len == k) //如果超出k长，则弹出最小数字
        var temp = kArr.pop() 
}