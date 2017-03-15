/**
 * Author： 何童鞋
 * Problem：74. Search a 2D Matrix
 * Algorithm：二分 
 * Time Complexity：O(log2(m*n))
 * Space Complexity：O(1)
 * Beats: 52.87%
 */

// 此题和一般二分的区别是二维数组，我们可以假象他是有序一维数组进行二分
// 不需要新开数组，只在数值比较时候映射到二维数组寻找具体数字
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return false;
    else{
        var m = matrix.length;
        var n = matrix[0].length;
        if(matrix[0][0] == target || matrix[m-1][n-1] == target)
            return true;
        else{
            var left = 0, right = m*n-1, mid = Math.floor((left+right)/2);
            var midM = matrix[Math.floor(mid/n)][mid%n];

            while(left != mid){
                if(midM == target)
                    return true;
                else if(midM < target)
                    left = mid;
                else
                    right = mid;
                mid = Math.floor((left+right)/2);
                midM = matrix[Math.floor(mid/n)][mid%n];  
            }
            return false;
        }  
    }
};

