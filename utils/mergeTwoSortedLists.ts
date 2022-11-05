//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  return new ListNode(1, null);
}
