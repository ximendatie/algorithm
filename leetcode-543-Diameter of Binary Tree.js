/**
 * Author： 何童鞋
 * Problem：543. Diameter of Binary Tree
 * Algorithm：DP
 * Time Complexity：O(n)
 * Space Complexity：O(n)
 * Beats: 
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 运行错误，本地可以，线上不行，不知所以

var diameterOfBinaryTree = function(root) {
    var max={'val':0};
    maxDepth(root,max);
    return max.val;
};

function maxDepth(node,max){
    if(node === null)
        return 0;
    else{
        var left = maxDepth(node.left,max.val);
        var right = maxDepth(node.right,max.val);
        max.val = Math.max(max.val,left+right) ;

        return Math.max(left,right)+1;
    }
}