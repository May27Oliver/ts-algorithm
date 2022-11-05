class LinkedNode<T> {
  data: T;
  next: LinkedNode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}

interface ILinkedList<T> {
  preppend(data: T): void; //在linkedlist最前面插入元素
  append(data: T): void; //在linkedlist最後面插入元素
  deleteNode(data: T): void; //刪除Linkedlist中的某值
  indexOf(data: T): number; //返回元素在LinkedList中的位置。
  traverse(): T[]; //遍歷linkedList並返回一串含有所有元素的array
  printLinkedList(): void; //印出所有linkedList的元素
}

class LinkedList<T> implements ILinkedList<T> {
  head: LinkedNode<T> | null = null;
  size: number = 0;
  preppend(data: T) {
    if (!this.head) {
      this.head = new LinkedNode(data);
      this.size = 1;
      return this.head;
    }
    let temp = this.head;
    this.head = new LinkedNode(data);
    this.head.next = temp;
    this.size++;
  }
  append(data: T): void {
    if (!this.head) {
      this.head = new LinkedNode(data);
      this.size = 1;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new LinkedNode(data);
    this.size++;
  }
  deleteNode(data: T): void {
    if (this.size === 0 || !this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      if (!current.next.next) {
        return;
      }
      current = current.next;
    }
    current.next = current.next ? current.next.next : null;
    this.size--;
  }
  indexOf(data: T): number {
    if (this.size === 0 || !this.head) {
      return -1;
    }
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.data === data) {
        return i;
      }
      if (!current.next) {
        return -1;
      }
      current = current.next;
    }
    return -1;
  }
  traverse(): T[] {
    let arr: T[] = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  printLinkedList(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
    }
  }
}

export default new LinkedList();
