/**
 * Author： 何童鞋
 * Problem：89. Gray Code
 * Algorithm：
 * Time Complexity：
 * Space Complexity：
 * Beats: 
 */


// var grayCode = function(n) {
    
// };
// 别人的java
public List<Integer> grayCode(int n) {
    List<Integer> result = new LinkedList<>();
    for (int i = 0; i < 1<<n; i++) result.add(i ^ i>>1);
    return result;
}