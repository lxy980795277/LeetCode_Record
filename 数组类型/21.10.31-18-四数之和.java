class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {      /*实际上还是双转子和你的方法，和两数之和，三数之和是相同的，只不过需要有4次去重操作*/
        List <List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        int len = nums.length;
        for(int i =0;i<len-1;i++){
            if(i>0&&nums[i]==nums[i-1]){
                continue;
            }
            for(int j =i+1;j<len-1;j++){
                if(j>1&&(j-1)>i&&nums[j]==nums[j-1]){
                    continue;
                }
                int left = j+1;
                int right = len - 1;
                while(left<right){
                    int sum = nums[i]+nums[j]+nums[left] +nums[right];
                    if(sum == target){
                        List <Integer> mid = new ArrayList<>();
                        mid.add(nums[i]);
                        mid.add(nums[j]);
                        mid.add(nums[left]);
                        mid.add(nums[right]);
                        result.add(mid);
                        while(left<right && nums[left]==nums[left+1]){
                            left++;
                        }
                        while(left<right && nums[right] == nums[right-1]){
                            right --;
                        }
                        left++;
                        right--;
                    }
                    else{
                        if(sum<target){
                            left++;
                        }
                        else{
                            right--;
                        }
                    }
                }
            }
            
        }
        return result;
    }
}
