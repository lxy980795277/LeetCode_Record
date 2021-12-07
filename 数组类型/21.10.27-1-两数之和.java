class Solution {                                        //暴力解法 O(n²)
    public int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length-1;i++) 
			for(int j=i+1;j<nums.length;j++)
				if(nums[i]+nums[j]==target)
					return new int[] {i,j};
		return new int[] {};

    }
}


class Solution {                                    //哈希表解法 O(n)
    public int[] twoSum(int[] nums, int target) {
        //解题思路: 利用hash表的特性 , target - nums[i] 是否存在, 如果存在 , 则取出返回, 如果不存在 , 则进行存储
        //containsKey()：是看map中有没有传入参数的value值 get():拿到map中传入对应key值的value值
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int curNum = target - nums[i];
            //是否存在 target - nums[i]的值
            if (map.containsKey(curNum)) {
                return new int[]{map.get(curNum), i};
            }
            //不存在 , 则进行存储
            map.put(nums[i], i);
        }
        return null;
    }
}