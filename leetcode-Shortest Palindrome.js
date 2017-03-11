/**
 * Author： 何童鞋
 * Problem：214. Shortest Palindrome
 * Language：JavaScript
 * Algorithm：Manacher 
 * Time Complexity：O(n)
 * Beats: 78.95%
 */

// 找以首字符开始的最长对称子串，借助maxRight跳过对称已知的部分，提高效率
var shortestPalindrome = function(s) {
    var len=s.length;
	var t='#';
	var target=0,pos=0,maxRight=0;
	var RL=new Array()
	RL[0]=1;
	if(len<2)
		return s;
	else{
		for(var w=0;w<len;w++)
			t=t+s[w]+'#';
		for(var i=0;i<(t.length+1)/2;i++){
			if(i>0){
				if(i>=maxRight){ //无法利用maxRight
					maxRight=i;
					for(var j=i+1,k=i-1;k>=0&&t[k]==t[j];k--,j++){
						if(k==0){
							target=i;
						}
						maxRight=j;
					}
					pos=i;
					RL[i]=maxRight-i+1;
				}
				else{
					var i2=2*pos-i;
					var maxRight2=2*pos-maxRight;
					if(i2-RL[i2]+1>maxRight2){ //完美利用maxRight不必进行运算，直接得到对称部分
						RL[i]=RL[i2];
					}
					else{ //利用maxRight跳过部分长度，从maxRight+1开始计算
						for(var j=maxRight+1,k=2*i-maxRight-1;k>=0&&t[k]==t[j];k--,j++){
							if(k==0){
								target=i;
							}
							maxRight=j;
						}
						pos=i;
						RL[i]=maxRight-i+1;
					}
				}
			}
		}
	}
	return s.substring(RL[target]-1).split('').reverse().join('')+s
};
