/**
 * @param {string} str
 * @returns {string}
 */

 //split分词，倒序组合数组
var reverseWords = function(str){
	var str2='';
	if(str==''){
		return '';
	}
	else{
		str2=solveStr(str);

		if(str2=='')
			return '';
		else{
			var words=str2.split(' ');
		    var result='';
		    for(var i=words.length-1;i>0;i--){
		    	result=result+words[i]+' ';
		    }
		    return result+words[0];//避免使用上面循环会最后多出空格
		}
		
	}

    
}
//预处理字符串，消除头尾空格和连续空格
function solveStr(str){
	var mark=0,str2='';
	for(var j=0;j<str.length;j++){
		if(str[j]!=' '){
			str2+=str[j];
			mark=1;
		}
		else{
			if(mark==1){
				str2+=' ';
				mark=0;
			}
		}
	}
	if(str2[str2.length-1]==' ')
		return str2.substring(0,str2.length-1);
	else
		return str2;
}
