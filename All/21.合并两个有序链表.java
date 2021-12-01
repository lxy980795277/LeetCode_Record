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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
            ListNode list = new ListNode(0);
            ListNode p = list;
            if(list1 == null){
                return list2;
            }
            if(list2 == null){
                return list1;
            }
            while(list1!=null && list2!=null){
                if(compare(list1.val,list2.val)){
                    p.next = list2;
                    p = p.next;
                    list2 = list2.next;
                }
                else{
                    p.next = list1;
                    p = p.next;
                    list1 = list1.next;
                }
            }
            while(list1!=null){
                p.next = list1;
                p = p.next;
                list1 = list1.next;
            }
            while(list2!=null){
                p.next = list2;
                p = p.next;
                list2 = list2.next;
            }
            return list.next;
    }
    public boolean compare(int a ,int b ){
        if(a > b){
            return true;
        }
        return false;
    }
}