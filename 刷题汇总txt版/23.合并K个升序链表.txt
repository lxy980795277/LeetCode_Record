/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        //两两合并
        int len = lists.length;
        // System.out.println(len);
        if(len == 0){
            return null;
        }
        if(len == 1){
            return lists[0];
        }
        ListNode l =  lists[0];
        ListNode p = l;
        
        int num = 1;
        while(num!=len){
            ListNode q = p;
            p = mergeTwo(q,lists[num]); 
            num++;
        }
        return p;

    }

    public ListNode mergeTwo(ListNode a , ListNode b){
        ListNode head = new ListNode();
        ListNode p = head;
        if(a == null){
            return b;
        }
        if(b == null){
            return a;
        }

        while(a!=null && b!=null){
            if(compare(a.val,b.val)){
                p.next = a;
                a = a.next;
                p = p.next;
            }
            else{
                p.next = b;
                b = b.next;
                p = p.next;
            }
        }
        while(a!=null){
            p.next = a;
            a = a.next;
            p = p.next;
        }
        while(b!=null){
            p.next = b;
            b=b.next;
            p = p.next;
        }
        return head.next;
    }

    public boolean compare(int a, int b){
        if(a<b){
            return true;
        }
        return false;
    }
}