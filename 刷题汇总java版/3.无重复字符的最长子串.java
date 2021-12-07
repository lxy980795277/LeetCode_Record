/*给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。*/


class Solution {        //解法一 
    public int lengthOfLongestSubstring(String s) {
            int max = 0;
            int[] chars = new int[128];
            for(int i =0;i<s.length();i++){
                for(int k =0;k<128;k++){  //定义了一个数组 因为字符一共有128个 所以用这个数组来判断是否出现重复
                        chars[k] = 0;
                }
                int temp = 0;
                for(int j =i;j<s.length();j++){
                    if(chars[s.charAt(j)] == 1){
                        break;  //如果这个字符出现过，直接跳出循环
                    }
                    else{
                        chars[s.charAt(j)] = 1; //没有出现过 将该位置置为已访问，并且计数器+1
                        temp++;
                    }
                }
                if(temp>max) max = temp;
            }
            
            return max;
    }
}


class Solution {     //哈希表的用时消耗比较大 不如辅助数组速度快 
    public int lengthOfLongestSubstring(String s) {
        // HashMap <Character,Integer> map = new HashMap<>();
        HashMap map= new HashMap();//也可以不指定类型 
                int max = 0;
                int temp = 0;
                for(int i =0;i<s.length();i++){
                    temp=0;
                    map.clear();
                for(int j =i;j<s.length();j++){
                    if(map.containsKey(s.charAt(j))){
                        break;
                    }
                    else{
                        map.put(s.charAt(j),j);
                        temp++;
                    }
                }
                if(temp>max) max = temp;
                
            }
            return max;
    }
}


     
class Solution {        //改进的方法 
    public int lengthOfLongestSubstring(String s) {
            int max = 0;
            int[] chars = new int[128];
            for(int i = 0; i < 128; i++) {
            chars[i] = -1;
            }
            int res = 0;
            int start = 0; // 窗口开始位置
            for(int i = 0; i < s.length(); i++) {
                int index = s.charAt(i);
                start = Math.max(start, chars[index] + 1);
                res   = Math.max(res, i - start + 1);
                chars[index] = i;
            }
            return res;
    }
}