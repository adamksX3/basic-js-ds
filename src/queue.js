const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    const toPlainNode = (node) => {
      if (node === null) {
        return null;
      }
      return { value: node.value, next: toPlainNode(node.next) };
    };
    return toPlainNode(this.head);
  }

  enqueue(value) {
    if (this.head === null) {
      const newNode = new ListNode(value);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new ListNode(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }
    const oldHead = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return oldHead.value;
  }
}

module.exports = {
  Queue
};
