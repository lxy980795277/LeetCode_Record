class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode xList = new ListNode(0);  //创建首节点
        ListNode newList= xList;  //声名一个变量用来在移动过程中指向当前节点
        int curr = 0;
        while(l1 != null || l2 != null){
            //获取链表的值
            int x = l1 != null ? l1.val:0;
            int y = l2 != null ? l2.val:0;
            //计算和
            int sum = x + y + curr;
            curr = sum /10 ;
            ListNode sumNode = new ListNode(sum % 10 ); //生成新的节点
            //移动指针指向下一个值
            newList.next= sumNode; //把新节点连起来
            newList = newList.next; //当前节点往后移动
            if(l1 != null) l1 = l1.next; //将节点向后移动，对l1的下一个节点进行处理
            if(l2 != null) l2 = l2.next; //将节点向后移动，对l2的下一个节点进行处理
        }
        if(curr > 0){
            newList.next = new ListNode(curr);
        }
        return xList.next;
    }
}