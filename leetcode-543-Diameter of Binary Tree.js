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


var max=0;
var diameterOfBinaryTree = function(root) {
    maxDepth(root);
    return max;
};

function maxDepth(node){
    if(node === null)
        return 0;
    else{
        var left = maxDepth(node.left);
        var right = maxDepth(node.right);
        max = Math.max(max,left+right) ;

        return Math.max(left,right)+1;
    }
}