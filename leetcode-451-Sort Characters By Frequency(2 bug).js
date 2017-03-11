/**
 * Author： 何童鞋
 * Problem：451. Sort Characters By Frequency
 * Language：JavaScript
 * Algorithm：堆
 * Time Complexity：O(n)
 * Beats: 21.70%
 */


// 暂时有bug需要继续调
s='tree'

var frequencySort = function(s) {
    var obArr = new Array();
    var ob = new Object();
    var result = new Array();
    if(s.length <= 1)
        return s;
    // hash计数
    for(var i = 0; i < s.length; i++){
        if(!ob[s[i]])
            ob[s[i]] = 1;
        else
            ob[s[i]]++;
    }
    // 转换成数组存储
    for(var j in ob){
        var tempOb = new Object();
        tempOb[j] = ob[j];
        tempOb['key']=j;
        tempOb['value']=ob[j];
        var temp = obArr.push(tempOb);
    } 
    console.log(obArr);

    buildHeap(obArr);//初次建立并初始调整堆
    for(var last = obArr.length-1;last > 0;last--){//循环置换出最大值，并重新调整堆
        var temp = obArr[last];
        obArr[last] = obArr[0];
        obArr[0] = temp;
        result += obArr.pop();
        heapAdjust(obArr,0);
    }
    result += obArr.pop();

    console.log(result);

    var str = '';
    for( var j = 0; j < result.length; j++){
        for(var t = 0;t < result[j]['value'];t++){
            str += result[j]['key'];
        }
            console.log('str');

    }
    console.log('str');

    return str;
    
};
console.log(frequencySort(s))
function buildHeap(obArr){
    var len = obArr.length;
    var last = len/2-1;
    for(var i = last;i >= 0;i--){
        heapAdjust(obArr,i);
    }
}
function heapAdjust(obArr,i){
    var len = obArr.length;
    if(i <= len/2-1){
        var lchild = 2*i+1,rchild = 2*i+2;
        var max = i;
        if(lchild < len&&obArr[max]['value'] < obArr[lchild]['value'])
            max = lchild;
        if(rchild < len&&obArr[max]['value'] < obArr[rchild]['value'])
            max = rchild;
        if(max != i){
            var temp = obArr[i];
            obArr[i] = obArr[max];
            obArr[max] = temp;
            heapAdjust(obArr,max);
        }
    }
    
    
}