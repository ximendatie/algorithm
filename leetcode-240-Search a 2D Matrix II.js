
/**
 * Author： 何童鞋
 * Problem：240. Search a 2D Matrix II
 * Algorithm：二分
 * Time Complexity： lg(n)+klog(m)    
 * Space Complexity：O(k)
 * Beats: 30.14%
 */
// 二分查找行，二分查找列 时间复杂度 lg(n)+klg(m)，代码实现比较麻烦，注意考虑数字超出边界的情况
// 还有个方法直接遍历行，符合大小范围就进行二分查找，时间复杂度是nlg(m),不过代码要简单太多
var searchMatrix = function(matrix, target) {
	
	if(matrix.length >= 1 && matrix[0].length >= 1){
		var m = matrix.length, n = matrix[0].length;

		var row1 = getProperRows(matrix,target,0);// 按照第一列数字寻找符合的行
		if(matrix[row1][0] === target)
			return true;

		var row2 = getProperRows(matrix,target,n-1);// 按照最后一列数字寻找符合的行
		if(matrix[row2][n-1] === target)
			return true;

		if(row1 < row2)
			return false;
		else{
			for(var i = row2; i <= row1; i++){    // 每行数字二分查找
				if(binaSearch(matrix,target,i))
					return true;
			}
			return false;
		}
	}  
	else{
		return false;
	}
};

// 二分法实现行挑选
function getProperRows(matrix,target,a){
	var left = 0, right = matrix.length-1;
	var mid = Math.floor((left+right)/2);
	if(matrix[left][a] === target)
		return left;
	else if(matrix[right][a] === target)
		return right;
	else if(matrix[left][a] > target){
		return 0;
	}
	else if(matrix[right][a] < target){
		return right;
	}
	else{
		while(left !== mid){
			if(matrix[mid][a] === target)
				return mid;
			if(target > matrix[mid][a])
				left = mid;
			else 
				right = mid;
			mid = Math.floor((left+right)/2);
		}
		if(a === 0)
			return left;
		else 
			return right;
	}
}

// 二分查找
function binaSearch(matrix,target,i){
	var left = 0, right = matrix[0].length-1;
	var mid = Math.floor((left+right)/2);
	if(matrix[i][left] === target)
		return true;
	else if(matrix[i][right] === target)
		return true;
	else if(matrix[i][left] > target)
		return false;
	else if(matrix[i][right] <target)
		return false;
	else{
		while(left !== mid){
			if(matrix[i][mid] === target)
				return true;
			if(target > matrix[i][mid])
				left = mid;
			else 
				right = mid;
			mid = Math.floor((left+right)/2);
		}
	}
}