/*
输入第一行一个数n(1<=n<=100)，接下来有n行，第i行有两个数xi和pi，xi和pi都是整数，-100<=xi<=100, 0<=pi<=100。表示随机变量X取值为xi的概率是pi/100。输入保证p1+p2+p3+…+pn=100。


输出一个数，随机变量X的数学期望E[x]，小数点后四舍五入保留3位。

    样例输入
    3
    0 50
    1 20
    2 30
    
    样例输出
    0.800
*/




/*当分子小于分母的时候，需要浮点数能得到非零结果，整型得到0*/
#include <stdio.h>
int main()
{
   int n, a, b;
   float result=0.000;
   scanf("%d",&n);
   while(scanf("%d%d", &a, &b) != EOF){
      //如果改为(float)(a*b)/100 同样可能使得结果变成0
      result = result + ((float)(a*b))/100;             
   }
   printf("%.3f", result);

}


//官方答案
#include <bits/stdc++.h>
using namespace std;
int main(){
	int n;
	scanf("%d", &n);
	double ans = 0;
	for(int i = 0; i < n; i++){
		int x, p;
		scanf("%d%d", &x, &p);
		ans += 1.0 * x * p / 100;
	}
	printf("%.3f\n", ans);
	//system("pause");
	return 0;
}
