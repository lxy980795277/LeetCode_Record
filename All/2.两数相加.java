/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode temp = head;
        ListNode head = new ListNode();
        
        int val, c = 0;             // 当前值val和进位变量c
        while(null != l1 && null != l2){
            val = l1.val + l2.val +c;   //和相加
            c = val / 10;               //判断是否需要进位（0或1）
            val = val % 10;             //当前位的数字是多少
            head.next = new ListNode(val);  //存储当前位数字
            head = head.next;           
            l1 = l1.next;               //指针后移
            l2 = l2.next;
        }
        while(l1!=null){               //一个链表遍历完，处理剩下的那个
            val = l1.val + c;
            val = val % 10;
            c = val / 10;
            head.next = new ListNode(val);
            head = head.next;
            l1 = l1.next;
        }
        while(l2 != null){
            val = l2.val + c;
            val = val % 10;
            c = val / 10;
            val = val % 10;
            
            head.next = new ListNode(val);
            head = head.next;
            l2 = l2.next;
        }
        if(0 != c){
            head.next = new ListNode(c);
        }
        return temp.next;
    }
}




/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
     ListNode root = new ListNode(0);
     ListNode pointer = root;
     int extra = 0;
     while(l1!=null || l2!=null){
         int num1 = l1 != null?l1.val:0;
         int num2 = l2 != null?l2.val:0;
         int sum = num1+num2+extra;
         extra = sum/10;

         ListNode l = new ListNode(sum%10);
         pointer.next = l;
         pointer = l;
         if(l1!=null){
             l1 = l1.next;
         }
         if(l2!=null){
             l2 = l2.next;
         }
     }
     if(extra>0){
         pointer.next = new ListNode(extra);
     }
     return root.next;
}
}