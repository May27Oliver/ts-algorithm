import linkedlist, {
  ILinkedList,
  LinkedNode,
} from "../data_structure/linkedList";
import { merge } from "./mergeSort";

//思路：merge sort divid and conquer
export default function mergeTwoLists(
  list1: ILinkedList<number> | null,
  list2: ILinkedList<number> | null
): LinkedNode<number> | null {
  let arr1 = list1 ? list1.traverse() : [];
  let arr2 = list2 ? list2.traverse() : [];
  //因為是合併兩個已sorted的list，是故無需divid
  let finalArr = merge(arr1, arr2);
  let finalList = new linkedlist<number>();
  finalArr.forEach((val) => finalList.append(val));
  return finalList.head;
}
