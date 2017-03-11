/**
 * Author： 何童鞋
 * Problem：373.Find K Pairs with Smallest Sums
 * Algorithm：最小堆
 * Time Complexity：O(n)
 * Space Complexity：O(n)
 * Beats: 
 */

// bug未调试
nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

var kSmallestPairs = function(nums1, nums2, k) {
    var heapArr = new Array();
    var resultArr = new Array();
    // var relen = 0;

    // 初始化一个堆。  nums1的每个数字和nums2的第一个数字，组合出来构建初始堆，小根
    for(var i = 0; i < nums1.length; i++){
        var tempArr = new Array();
        tempArr[0] = nums1[i];
        tempArr[1] = nums2[0];
        var tlen = heapArr.push(tempArr)
    }

    // 更新堆，排序出前k大数字。 顺序根据nums1，逐个求和nums2数字，入堆调整
    if(nums2.length > 1){
        for(var j = 0; j < nums1.length; j++){
            for(var w = 1; k > 0 && w < nums2.length; w++,k--){
                var tlen = resultArr.push(heapArr[0])
                heapArr[0][0] = nums1[j];
                heapArr[0][1] = nums2[w];

                adjustHeap(heapArr,0);
            }     
        }
    }
    while(heapArr.length > 0 && k > 0){
        resultArr[resultArr.length][0] = heapArr[0][0];
        resultArr[resultArr.length][1] = heapArr[0][1];
        heapArr[0][0] = heapArr[heapArr.length][0];
        heapArr[0][1] = heapArr[heapArr.length][1];
        var t = heapArr.pop();
    }
    
    return resultArr;
    
};

function adjustHeap(heapArr,a){
    var len = heapArr.length, min = a;
    if(2*a+1 < len){
        var lchild = 2*a+1;
        var rchild = 2*a+2;
        var valL = heapArr[lchild][0] + heapArr[lchild][1];
        var valR = heapArr[rchild][0] + heapArr[rchild][1];
        var valA = heapArr[a][0] + heapArr[a][1];

        if(lchild < len && valL < valA)
            min = lchild;
        if(rchild < len && valR < heapArr[min][0] + heapArr[min][1])
            min = rchild;

        if(min != a){
            var temp = new Array();
            temp[0] = heapArr[a][0];
            temp[1] = heapArr[a][1];
            heapArr[a][0] = heapArr[min][0];
            heapArr[a][1] = heapArr[min][1];
            heapArr[min][0] = temp[0];
            heapArr[min][1] = temp[1];
        }
    }
}

console.log(kSmallestPairs(nums1,nums2,k));