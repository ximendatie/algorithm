/**
 * Author： 何童鞋
 * Problem：172. Factorial Trailing Zeroes
 * Algorithm：判断阶乘的零的个数，相当于判断判断整个乘式中因式分解能够得到的5的个数
 * Time Complexity：O(log5(n))
 * Space Complexity：O(1)
 * Beats: 22.58%
 */

var trailingZeroes = function(n) {
    var result = 0;
    for(var i = 5; parseInt(n/i) > 0; i *= 5){
        result += parseInt(n/i)
    }
    return result;
};
