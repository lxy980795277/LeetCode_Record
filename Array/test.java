import java.util;

public class test{
    public int removeDuplicates(int[] nums) {
        Arrays.sort(nums);
        int len = nums.length;
        for(int i = 0;i<nums.length;i++){
            if(nums[i+1] == nums[i]){
                nums = delete(nums,i+1);
                len--;
            }
        }
        return len;
    }
    public int[] delete(int[] nums,int a){
        int[] n = nums;
        for(int i =a;i<n.length;i++){
            n[i] = n[i+1];
        }
        return n;
    }

    public static void main(String[] args) {
        int nums[] = {1,1,2};
        int a = 0;
        test b = new test();
        a = b.removeDuplicates(nums);
        System.out.println(a);
    }
}