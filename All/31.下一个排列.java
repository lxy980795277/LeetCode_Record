class Solution {
    /**判断按照字典序有木有下一个，如果完全降序就没有下一个
如何判断有木有下一个呢？只要存在a[i-1] < a[i]的升序结构，就有，而且我们应该从右往左找，一旦找到，因为这样才是真正下一个
当发现a[i-1] < a[i]的结构时，从在[i, ∞]中找到最接近a[i-1]并且又大于a[i-1]的数字，由于降序，从右往左遍历即可得到k
然后交换a[i-1]与a[k]，然后对[i, ∞]排序即可，排序只需要首尾不停交换即可，因为已经是降序 上面说的很抽象， */
    public void nextPermutation(int[] nums) {
        int len = nums.length;
        int tag = 0;
        for (int i =len-1;i>0;i--){
            if(nums[i]>nums[i-1]){
                int temp = 0;
                int k = nums[i]-nums[i-1];
                int k_position = i;
                for(int j=i;j<len;j++){
                    if(nums[j]>nums[i-1]&&(nums[j]-nums[i-1])<k){
                        k = nums[j]-nums[i-1];
                        k_position = j;
                    }
                }
                temp = nums[i-1];
                nums[i-1] = nums[k_position];
                nums[k_position] = temp;
                Arrays.sort(nums,i,len);
                tag = 1;
                break;
            }
        }
        if(tag == 0){
            Arrays.sort(nums);
        }
    }
}