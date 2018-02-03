// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) {
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.storage = [];
    this.limit = limit;
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }
}
/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};
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

module.exports = {
  LimitedArray,
  getIndexBelowMax,
};
