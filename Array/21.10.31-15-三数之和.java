class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List <List<Integer>> result = new ArrayList<>();
        int left = 0;
        int right = 0;
            if(nums.length<3){
            return result;
        }
        else{
            for(int i =0;i<nums.length;i++){
                if(i>0&&nums[i]==nums[i-1]){
                    continue;
                }
                left = i+1;
                right = nums.length-1;
                while(left<right){       
                if(nums[i]+nums[left]+nums[right] == 0){
                    List <Integer> mid = new ArrayList<>();
                    mid.add(nums[i]);
                    mid.add(nums[left]);
                    mid.add(nums[right]);
                    result.add(mid);
                    while(left<right && nums[left]==nums[left+1]){
                        left++;
                    }
                    while(left<right && nums[right]==nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }
                else{
                    if(nums[i]+nums[left]+nums[right] > 0){
                        right --;
                    }
                    else{
                        left++;
                    }
                }
            }
            }
            
        }
        return result;
        
        
    }
}