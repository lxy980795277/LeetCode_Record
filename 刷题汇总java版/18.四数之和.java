/*给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。
。*/

class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {      /*实际上还是双指针的方法，和两数之和，三数之和是相同的，只不过需要有4次去重操作*/
        List <List<Integer>> result = new ArrayList<>();			 //定义一个列表 列表种的元素是列表 
        Arrays.sort(nums);										     //先对数组进行排序 
        int len = nums.length;
        for(int i =0;i<len-1;i++){									//相邻两个数相等则直接跳过该次比较 
            if(i>0&&nums[i]==nums[i-1]){
                continue;
            }
            for(int j =i+1;j<len-1;j++){							//还是相邻两个数相等 
                if(j>1&&(j-1)>i&&nums[j]==nums[j-1]){
                    continue;
                }
                int left = j+1;										//双指针 从前开始和从后开始 
                int right = len - 1;
                while(left<right){
                    int sum = nums[i]+nums[j]+nums[left] +nums[right];  
                    if(sum == target){
                        List <Integer> mid = new ArrayList<>();		//将当前4个元素存储
                        mid.add(nums[i]);
                        mid.add(nums[j]);
                        mid.add(nums[left]);
                        mid.add(nums[right]);
                        result.add(mid);							//存储这4个数 作为一个列表元素
                        while(left<right && nums[left]==nums[left+1]){	//左边指针右移动
                            left++;
                        }
                        while(left<right && nums[right] == nums[right-1]){	//右边指针左移
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
