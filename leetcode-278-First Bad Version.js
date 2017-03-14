/**
 * Author： 何童鞋
 * Problem：278. First Bad Version
 * Algorithm：二分
 * Time Complexity：O(log2(n))
 * Space Complexity：O(1)
 * Beats: 34.73%
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(isBadVersion(1)){
            return 1;
        }
        else{
            var left = 1, right = n;
            var mid = Math.ceil((left+right)/2);
            while(mid != right){
                if (isBadVersion(mid))
                    right = mid;
                else 
                    left = mid;
                mid = Math.ceil((left+right)/2);
            }
            return mid;
        }
    };
};
