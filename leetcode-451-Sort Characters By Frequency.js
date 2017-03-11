/**
 * Author： 何童鞋
 * Problem：451. Sort Characters By Frequency
 * Language：JavaScript
 * Algorithm：hash、堆栈、js之sort
 * Time Complexity：O(n)
 * Beats: 21.70%
 */
var frequencySort = function(s) {
    var obArr = new Array();
    var ob = new Object();
    if(s.length<1)
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
        var temp = obArr.push(tempOb);
    } 
    // 排序
    var sortedArr = obArr.sort(function func(a,b){
        var tempA,tempB;
        for(var i in a) tempA = a[i];//获得value 只运行一次
        for(var j in b) tempB = b[j];
        return b[j]-a[i];});
    // 输出
    var result='';
    for(var k = 0; k < sortedArr.length; k++){
        for(var tempKey in sortedArr[k]){ //获得key 只运行一次
           var loop = sortedArr[k][tempKey];
           for( var t = 0;t < loop; t++ )
                result += tempKey;
        }
    }
    return result;
};
