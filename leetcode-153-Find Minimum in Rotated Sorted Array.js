/**
 * Author： 何童鞋
 * Problem：153. Find Minimum in Rotated Sorted Array
 * Algorithm：二分
 * Time/Space Complexity：
 * Beats: 19.73%
 */

// 数组分为大数段和小数段，最小数字在两者中间，小于最后一个数字则mid在小数段，大于最后一个数则在大数段，以此二分
// 可以画出二维图像理解更方便
var findMin = function(nums) {
    var left = 0, right = nums.length-1;
    var mid = Math.floor((left+right)/2);
    var last = nums[right];

    if(nums.length === 1 || nums[0] < nums[right])
        return nums[0];
    else{
        while(left !== mid){
            if(nums[mid] > nums[mid+1])  //这部分不要也行，让循环终止也能找到结果
                return nums[mid+1];
            if(nums[mid] < last)
                right = mid;
            else
                left = mid;
            mid = Math.floor((left+right)/2);
        }
        return nums[right];
    }
};
