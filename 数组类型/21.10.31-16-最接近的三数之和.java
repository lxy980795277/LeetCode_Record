class Solution {                    /*双指针方法*/     /**用时7ms，26.94%；内存37.9MB，89.33% */
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int len = nums.length;
        int result = 0;
        int loss = 65536;
        for(int i =0;i<len;i++){        /**思路：双指针方法，定义loss为差值，先将数组从小到大排序，设置i从0开始遍历数组，设置left指针=left+1，right指针=长度-1，然后双指针开始移动，如果i，left，right三数之和与target的差的绝对值小于loss，则更新loss，判断，如果当前三个数的和小于target，则应该由left向右移动以获得较大的值，如果当前三个数的和大于target，则应该由right向左移动获取较小的值。 */
            int left = i+1; 
            int right = len-1;
            while(left<right){
                int sum = nums[i]+nums[left]+nums[right];
                if(Math.abs(sum-target)<loss){
                    loss = Math.abs(sum-target);
                    result = sum;
                }
                if(sum-target<0){
                        left++;
                    }
                else{
                    right--;
                }
            }
        }
        return result;
    }
}