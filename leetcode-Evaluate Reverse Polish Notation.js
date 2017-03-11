/**
 * Author： 何童鞋
 * Problem：150.Evaluate Reverse Polish Notation
 * Algorithm：Stack
 * Time Complexity：O(n)
 * Space Complexity：O(n)
 * Beats: 59.65%
 */
// 此题注意类型变化，题目给的是字符串，需要转化运算，对于js弱类型可能不小心就自动字符串计算了
var evalRPN = function(tokens) {
    var stackArr = new Array();
    var a,b;
    var temp;
    for(var i = 0; i < tokens.length; i++){
        //如果是运算符，出栈两个数字运算后入栈
        if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){ 
            b = parseInt(stackArr.pop());
            a = parseInt(stackArr.pop());
            switch(tokens[i]){
                case '+':
                    temp = stackArr.push(parseInt(a + b));
                    break;
                case '-':
                    temp = stackArr.push(parseInt(a - b));
                    break;
                case '*':
                    temp = stackArr.push(parseInt(a * b));
                    break;
                case '/':
                    temp = stackArr.push(parseInt(a/b));
                    break;

            }
        }
        // 如果是数字直接入栈
        else
            temp = stackArr.push(parseInt(tokens[i]));
    }
    return stackArr[0];
};