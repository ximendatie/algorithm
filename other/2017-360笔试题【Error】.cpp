#include  <iostream> 
using namespace std;

int solveFun(int *n, int m){
	for(int i = 0; i < sizeof(n); i++){
    	if(n[i] - n[i+1] < -1 && m > n[i+1])
              return n[i]+1;
    }
}

int main()
{
    int n, m, a, b;
    
    cin>>n>>m;
    int nArr[n];
    for(int i = 0; i < n; i++){
    	cin>>nArr[i];
    }
      
    int mArr[m];
    for(int j = 0; j < m; j++){
    	cin>>mArr[j];
        cout<<solveFun(nArr,mArr[j])<<endl;
    }
    return 0;
}

