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


// 别人的java DP
public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<>();
        boolean[][] dp = new boolean[s.length()][s.length()];
        for(int i = 0; i < s.length(); i++) {
            for(int j = 0; j <= i; j++) {
                if(s.charAt(i) == s.charAt(j) && (i - j <= 2 || dp[j+1][i-1])) {
                    dp[j][i] = true;
                }
            }
        }
        helper(res, new ArrayList<>(), dp, s, 0);
        return res;
    }
    
    private void helper(List<List<String>> res, List<String> path, boolean[][] dp, String s, int pos) {
        if(pos == s.length()) {
            res.add(new ArrayList<>(path));
            return;
        }
        
        for(int i = pos; i < s.length(); i++) {
            if(dp[pos][i]) {
                path.add(s.substring(pos,i+1));
                helper(res, path, dp, s, i+1);
                path.remove(path.size()-1);
            }
        }
    }
}