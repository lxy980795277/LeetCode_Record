class Solution {
    public int removeElement(int[] nums, int val) {
        int i = 0;
        int j = 0;
        int finalnum = nums.length;
        for(i =0;i<nums.length;i++){
            if(nums[i] != val){
                nums[j] = nums[i];
                j++;
            }
            else{
                finalnum--;
            }
        }
        return finalnum;
    }
}


/*双指针解法，和26题相同的方法*/ 