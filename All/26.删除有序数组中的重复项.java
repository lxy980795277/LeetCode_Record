
class Solution {
    public int removeDuplicates(int[] nums) {
        // 使用双指针
        if(nums==null || nums.length == 1){
            return nums.length;
        }
        int i = 0,j =1;
        while(j<nums.length){
            if(nums[i]==nums[j]){
                j++;
            }else{
                i++;
                nums[i]=nums[j];
                j++;
            }
        }
        return i+1;
    }
}

//*双指针解法
//思路 用双指针来解决，i指针用于遍历数组，j指针用于虚构一个结果数组，始终指向有效数组末尾
//j初始位置指向0，即原数组的开头，相当于把数组的第一个元素添加进了结果数组，
//然后i指针向后移动，如果和j指针末尾的数不相同，就添加进来，然后j指针继续向后移动
class Solution {
    public int removeDuplicates(int[] nums) {
        int len = nums.length;
        int j = 0;       //指向有效数组的最后一位 
        for (int i = 0; i < len; i++) {
            if (nums[i] != nums[j]) {
                j++;
                nums[j] = nums[i];
            }
            else{
                continue;
            }
        }
        return j + 1;
    }
}







*/