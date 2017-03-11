/**
 * Author： 何童鞋
 * Problem：166. Fraction to Recurring Decimal
 * Algorithm：余数判断、map映射  核心：记录小数产生是的余数，当余数循环时，表示结果在循环；利用对象 余数:位置  做的类似map映射
 * Time Complexity：
 * Space Complexity：
 * Beats: 93.75
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator%denominator == 0)
        return (numerator/denominator).toString();
    else{
        var pre = numerator*denominator<0?'-':'';
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);    
        //parseInt语法： parseInt(string, radix)，当numerator/denominator结果很小时，再parseInt就会被以科学记数法的字符串解析。所以小于1的都提前判断输出0
        var inte =numerator<denominator?0:parseInt(numerator/denominator);
        var result = inte.toString()+'.';
        var num = numerator%denominator;
        var lastStr = '';

        var memberArr = new Object();
        memberArr[num.toString()] = 0;
        
        var count = 1;
        while(num != 0){
            num *= 10;
            var temp = num<denominator?0:parseInt(num/denominator);
            lastStr += temp.toString();
            num %= denominator;
            if(memberArr[num.toString()] > -1){
                var lastStrArr = lastStr.split('');
                lastStrArr.splice(memberArr[num.toString()],0,'(');
                lastStr = lastStrArr.join('');
                lastStr += ')';
                break;
            }
            memberArr[num.toString()] = count;
            count++;            
        }
        result =pre + result + lastStr;
        return result;
    }
};

console.log(fractionToDecimal(1,214748364))