/*给你一个字符串 s，找到 s 中最长的回文子串。*/


class Solution {      //时间复杂度为 O(n^3)  超时 暴力方法
    public String longestPalindrome(String s) {
        int length = s.length();    //获取字符串长度
        int result_len = 0;         //最大回文的长度 
        int posl = -1;             //记录最长回文的起始位置
        int posr = -1;              //记录最长回文的结束位置 

        for(int i = 0;i<length;i++){
            for(int j =i;j<length;j++){
                int num = 0;       //记录当前回文的长度
                int tag = 1;
                if(s.charAt(i) == s.charAt(j)){ //如果两端相同，则认为该区间内可能存在一个回文字符串 
                    var left = i;
                    var right = j;
                    while(left<=right){   //判断是否存在回文 
                        if(s.charAt(left) == s.charAt(right)){
                            num = left==right?num+1:num+2;
                            left++;
                            right --;   //如果移动偶数个，则+2 单个+1
                        }
                        else{
                            tag = 0;
                            break;
                        }
                    }  
                    if(tag == 1){    //当前是一个回文，则存储 
                        if(num >result_len){
                            posl = i;
                            posr = j;
                            result_len = num;
                        }
                    } 
                }
            }
        }
        return s.substring(posl,posr+1); //输出回文 
    }
}



class Solution {   //双指针算法
    // 主函数
    public String longestPalindrome(String s) {
        // 记录最长回文串
        String res = "";

        // 穷举以所有点（奇数一个点，偶数两个点）为中心的回文串
        for (int i = 0; i < s.length(); i++) {
            // 当回文串是奇数时，由一个中心点向两边扩散
            String s1 = palindrome(s, i, i);
            // 当回文串是偶数时，由中间的两个中心点向两边扩散
            String s2 = palindrome(s, i, i + 1);

            // 三元运算符：判断为真时取冒号前面的值，为假时取冒号后面的值
            res = res.length() > s1.length() ? res : s1;
            res = res.length() > s2.length() ? res : s2;
        }

        return res;
    }

    // 辅助函数：寻找回文串
    private String palindrome(String s, int left, int right) {
        // 在区间 [0, s.length() - 1] 中寻找回文串，防止下标越界
        while (left >=0 && right < s.length()) {
            // 是回文串时，继续向两边扩散
            if (s.charAt(left) == s.charAt(right)) {
                left--;
                right++;
            } else {
                break;
            }
        }

        // 循环结束时的条件是 s.charAt(left) != s.charAt(right), 所以正确的区间为 [left + 1, right), 方法 substring(start, end) 区间是 [start, end), 不包含 end
        return s.substring(left + 1, right);
    }
}