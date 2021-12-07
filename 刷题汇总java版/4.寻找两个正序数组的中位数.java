class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        /**
        主要思路：本题的难点主要在于将两个有序数组合并为一个有序数组，这里采用双指针的方法，即可解决，对两个数组分别定义一个指针i和j，如果i指针对应的数小就填到新数组中，之后i++；否则将j指着对应的数组填到新数组中，之后j++；考虑临界情况就是，当一个数组中所有的值都被加入新数组后，另一个数组还有剩余，直接将剩余数组全部加入新数组即可。    
         */
        int lena = nums1.length;
        int lenb = nums2.length;
        int len = lena+lenb;
        double []result = new double[len];
        int i =0;
        int j =0;
        for(int k = 0;k<len;k++){
            if(i<nums1.length&&j<nums2.length){
                if(nums1[i]<=nums2[j]){
                    result[k] = nums1[i];
                    i++;
                }
                else{
                    result[k] = nums2[j];
                    j++;
                }
            }
            else if(i==nums1.length){
                result[k] = nums2[j];
                j++;
            }
            else{
                result[k] = nums1[i];
                i++;
            }
            
        }
        if(len%2==1){
            double r = result[(len/2)];
            return r;
        }
        else{
            double r = (result[len/2-1]+result[len/2])/2;
            return r;
        }
    }
}