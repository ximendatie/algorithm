/**
 * Author： 何童鞋
 * Problem：215. Kth Largest Element in an Array 
 * Algorithm：js之sort
 * Time Complexity：sort
 * Space Complexity：sort
 * Beats: 38.69%
 */
var findKthLargest = function(nums, k) {
    return nums.sort(function func(a,b){return b-a})[k-1];
};
