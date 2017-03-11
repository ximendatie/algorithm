/**
 * Author： 何童鞋
 * Problem：503. Next Greater Element II
 * Language：JavaScript
 * Algorithm：Stack 主要思路：将数组进行逐个入栈尝试，小于栈顶入栈，大于栈顶则将栈中小于该数的数字都出栈。
 * Time Complexity：O(n)
 * Beats: 80.36%
 */
// 该题有一个关键，那就是栈存储的不是数组内容，而是每个数字对应的下标
var nextGreaterElements = function(nums) {
    var result=new Array();
    var placeStack=new Array();
    var len=nums.length;

    if(len<1)
        return nums;
    else if(len==1){
        result[0]=-1;
        return result;
    }
    else{
        for(var w=0;w<len;w++) // 本算法将原数组进行了双倍延长，满足循环数组要求
            nums[len+w]=nums[w];
        placeStack[0]=0;
        var placeLen=placeStack.length;
        for(var i=1;i<2*len;i++){               
            while(placeLen-1>=0&&nums[placeStack[placeLen-1]]<nums[i]){
                result[placeStack[placeLen-1]]=nums[i];
                var temp=placeStack.pop();
                placeLen--;
            }
            if(i<len) //当进行大于原数组长度的数字入栈尝试时，只会出栈不会入栈（因为入栈后也会再次出栈，这些部分是前面求过的）
                var placeLen=placeStack.push(i);         
        }
        for(var k=0;k<placeStack.length;k++){ //最后剩余栈内的数字都是数组最大值，全部赋值-1
            result[placeStack[k]]=-1;
        }
    }
    return result;
};