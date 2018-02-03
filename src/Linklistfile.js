class LinkedList { // creating class
  constructor() {
    this.head = null;// head is null
    this.tail = null;// tail is null
  }

  addToTail(value) {
    const newNode = {// creating a newNode that has value and pointer to next which is null
      value,
      next: null,
    };
    if (!this.head) { // if there is no head that mean no tail either. I had creadted head and tail
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;// now I had give tail next to new node, which means added a new node end of tail
    this.tail = newNode;//  since tail has added to new tail become last node which has value and next pointer
  }

  removeHead() {
    this.head = this.head.next; // this line will remove the old head and point to next 0-->
  }

  coatains(value) {
    let node = this.head;// head is assign to node variable
    while (node) { //   if there is node then do rest of the code
      if (this.value === value) { //  checking of the current node had the target value.if yes then return true
        return true;
      }
      node = node.next; // if head didnt had the target value we move to else statement and check next node.
    }
    return false;// if none of the node found the target value return false
  }

}
module.exports = LinkedList;
