/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A,B,C,D){
    

	// 如果暴力解决的话这个是n^4问题，提供分开两次进行就能变成n^2问题
	// 并通过object以类似map的形式进行hash匹配，大大提速
    var len=A.length,ob=new Object(),n=0;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            if(!ob[A[i]+B[j]]){
                ob[A[i]+B[j]]=0;
            }     
            ob[A[i]+B[j]]++;
        }
    }
    for(var k=0;k<len;k++){
        for(var w=0;w<len;w++){
            if(ob[-(C[k]+D[w])]){
                n=n+ob[-(C[k]+D[w])];
            }
        }    
    }
    // console.log(n)
    return n;	
};