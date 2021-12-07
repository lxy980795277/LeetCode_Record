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
class Solution {   //链表反转
    public ListNode reverseList(ListNode head) {
            ArrayList <ListNode> list = new ArrayList<>();
            ListNode p =head;
            if(head == null){
                return null;
            }
            while(p.next!=null){
                list.add(p);
                ListNode p1 = p;
                p=p.next;
                p1.next = null;
            }
            list.add(p);
            // System.out.println(list.get(4).val);    
            int len = list.size();
            ListNode newhead = new ListNode();
            ListNode q = newhead;
            for(int i =len-1;i>=0;i--){
                q.next = list.get(i);
                q =q.next;
            }
            return newhead.next;
    }
}