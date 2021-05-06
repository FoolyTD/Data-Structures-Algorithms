/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.

  
  if(sortedLinkedList.head) {
    let node = sortedLinkedList.head;
  while (node.next) {
    if (node.value === node.next.value) {
      node.next = node.next.next;
    } else {
      node = node.next
    }
  }
}
  return sortedLinkedList;

  /* // if list is empty, just return list
  if (!sortedLinkedList.head) return sortedLinkedList;

  // Initialize two pointers 1 and 2
  // start the first pointer at head.next start second at head
  let pointer1 = sortedLinkedList.head.next;
  let pointer2 = sortedLinkedList.head;

  //While there is a pointer1, check if values match:
  while (pointer1) {
    // compare the two values, if equal remove the value from list and check again
    if (pointer1.value === pointer2.value) {
      // the sortedLInkedList with removed duplicates
      sortedLinkedList.remove((node, index) => node === pointer1);
    }
    // continue until pointer 1 next is null
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // return the sortedLinkedList
  return sortedLinkedList; */
}

module.exports = removeDuplicates;
