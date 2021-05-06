const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    // Insert the value at the end of the list
    this.linkedList.insert(value);
    // return reference to the queue
    return this.linkedList;
  }

  dequeue() {
    // remove the head of the list because insert is the tail
    // if there is no head, throw error
    if (!this.linkedList.head) {
      throw "Empty queue";
    } else {
      // call remove function with the first index we wish to remove
      return this.linkedList.remove((node, index) => index === 0);
    }
  }

  peek() {
    // Check to see the next value to be removed
    return this.linkedList.head.value;
  }

  isEmpty() {
    // Check to see if the queue is empty
    return this.linkedList.head === null;
  }
}

module.exports = Queue;
