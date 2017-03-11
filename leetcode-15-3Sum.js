/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var threeSum = function(nums) {
    var orderedNums=nums.sort(function mysort(a,b){return a-b;});//js自带排序
    var result=triplets(orderedNums);
    return result;
};
// 冒泡排序
// function order(nums){
// 	var j,i,temp;
// 	if(!nums)
// 		return;
// 	else{
// 		for(j=nums.length;j>1;j--){
// 			for(i=0;i<j-1;i++){
// 				if(nums[i+1]<nums[i]){
// 					temp=nums[i];
// 					nums[i]=nums[i+1];
// 					nums[i+1]=temp;
// 				}
// 			}
// 		}
// 		return nums;
// 	}

// }
function triplets(orderedNums){
	var len=orderedNums.length;
	var result=new Array();
	var n=0;
	if(!orderedNums){
		return;
	}
	else{	

		for(var i=0;i<len-2;i++){

			if(i==0||orderedNums[i]!=orderedNums[i-1]){

				var start=i+1,end=len-1,target=-orderedNums[i];

				while(start<end){
					
					if(orderedNums[start]+orderedNums[end]<target){
						start++;
					}
					else if(orderedNums[start]+orderedNums[end]>target){
						end--;
					}
					else if(orderedNums[start]+orderedNums[end]==target&&orderedNums[end]!==orderedNums[end+1]){

						result[n]=new Array();
						result[n][0]=orderedNums[i];
						result[n][1]=orderedNums[start];
						result[n][2]=orderedNums[end];
						n++;
						end--;

					}
					else{
						end--;
					}
				}

			}
		}
		return result;
	}
}