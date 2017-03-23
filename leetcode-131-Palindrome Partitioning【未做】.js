/**
 * Author： 何童鞋
 * Problem：278. First Bad Version
 * Algorithm：深度搜索DFS 递归
 * Time Complexity：
 * Space Complexity：
 * Beats: 34.73%
 */

var partition = function(s) {
    var resultArr = new  Array();
    var tempArr = new Array();

    if(s === '')
        return '';
    else
        return getResult(s,resultArr,tempArr,0);
};

function getResult(s,resultArr,tempArr,start){
    for(var i = start; i < s.length; i++){
        
    }
}