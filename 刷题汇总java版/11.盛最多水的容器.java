/*暴力算法，方法是对的，复杂度为O（n²），但是超时*/
class Solution {
    public int maxArea(int[] height) {
        int max_water = 0;
        for(int i =0;i<height.length;i++){
            for(int j =i+1 ;j<height.length;j++){
                int max = (j-i)*constract(height[i],height[j]);
                if(max >max_water){
                    max_water = max;
                }
            }
        }
        return max_water;
    }
    public int constract(int a,int b){
        if(a<b){
            return a;
        }
        else{
            return b;
        }
    }
}

/*双指针法，
 双指针: 数组左边和右边各一个指针，
 比较两个位置的大小计算面积，
 将较小的那一个往数组中心移动，直到指针重合(较小的移动x轴减少一，
 但是y轴可能增加大于1，所以面积可能会增大) 
 */

class Solution {
    public int maxArea(int[] height) {
        int head = 0;
        int tail = height.length-1;
        int max_water =(height.length-1)*Math.min(height[head],height[tail]);
        while(head!=tail){
            if(height[head]>height[tail]){
                tail -=1;
            }
            else{
                head+=1;
            }
            int number = Math.min(height[head],height[tail])*(tail-head);
            if(number>max_water){
                max_water = number;
            }
        }
        return max_water;
    }
} 


