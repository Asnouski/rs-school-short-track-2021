/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.elem = 0;
  }

  push(element) {
    this.arr[this.elem] = element;
    this.elem++;
    return this.arr;
  }

  pop() {
    const item = this.arr[this.elem - 1];
    this.arr.splice(this.elem - 1, 1);
    this.elem -= 1;
    return item;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = Stack;
