/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	var str=new Array();
	for(var i=1;i<=n;i++){
		if(i%3==0||i%5==0){
			if(i%3==0&&i%5==0){
				str[i-1]='FizzBuzz';
			}
			else if(i%3==0){
				str[i-1]='Fizz';
			}
			else{
				str[i-1]='Buzz';
			}
			
		}
		else{
			str[i-1]=i.toString();
		}
	}
	return str;

};