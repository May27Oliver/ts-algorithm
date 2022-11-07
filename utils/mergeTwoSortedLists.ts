import linkedlist, {
  ILinkedList,
  LinkedNode,
} from "../data_structure/linkedList";
import mergeSort from "./mergeSort";

//思路：merge sort divid and conquer
export default function mergeTwoLists(
  list1: ILinkedList<number> | null,
  list2: ILinkedList<number> | null
): LinkedNode<number> | null {
  let arr1 = list1 ? list1.traverse() : [];
  let arr2 = list2 ? list2.traverse() : [];
  let finalArr = mergeSort(arr1.concat(arr2));
  let finalList = new linkedlist<number>();
  finalArr.forEach((val) => finalList.append(val));
  return finalList.head;
}
