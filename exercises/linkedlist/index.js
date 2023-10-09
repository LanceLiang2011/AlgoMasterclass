// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size () {
    let count = 0;
    let pointer = this.head;
    while (pointer !== null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (this.head === null) return;
    this.head = this.head.next;
  }

  removeLast () {
    if (this.head === null) return;
    let previous = this.head;
    if (previous.next === null) {
      this.removeFirst();
      return;
    }
    let pointer = previous.next;
    while (pointer && pointer.next !== null) {
      previous = previous.next;
      pointer = pointer.next;
    }
    previous.next = null;
  }

  insertLast (data) {
    const nodeToAdd = new Node(data);
    if (this.head === null) {
      this.head = nodeToAdd;
    } else {
      const lastNode = this.getLast();
      lastNode.next = nodeToAdd;
    }

  }

  getAt (index) {
    if (index < 0) return null;
    let pointer = this.head;
    let count = 0;
    while (count < index) {
    if (pointer === null) return null;
    pointer = pointer.next;
    count++;

    }
    return pointer;
  }

  removeAt (index) {
    if (index === 0) {
      if (this.head) this.head = this.head.next;
      return;
    }
    const prevNode = this.getAt(index - 1);
    if (prevNode === null || prevNode.next === null) return;
    prevNode.next = prevNode.next.next;
  }

  insertAt (data, index) {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const prevNode = this.getAt(index - 1);
    if (prevNode === null) {
      this.getLast().next = newNode;
      return;
    };
    newNode.next = prevNode.next;
    prevNode.next = newNode;

  }

  forEach (fn) {
    let pointer = this.head;
    while (pointer) {
      fn(pointer);
      pointer = pointer.next;
    }
  }



}

module.exports = { Node, LinkedList };
