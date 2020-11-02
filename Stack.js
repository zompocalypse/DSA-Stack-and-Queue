// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    return this.top === 0;
  }

  display() {
    let node = this.top;
    let str = '';
    while (node !== null) {
      str += node.data + ', ';
      node = node.next;
    }
    return str;
  }
}

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(starTrek.peek());
  console.log(starTrek.isEmpty());
  console.log(starTrek.display());

  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  console.log(starTrek.display());
}

// main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let letters = new Stack();
  let reversedWord = '';

  for (let i = 0; i < s.length; i++) {
    letters.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    reversedWord += letters.pop();
  }

  if (reversedWord === s) {
    return true;
  }
  return false;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchParens(str) {
  let stack = [];

  let open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  let closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

console.log(matchParens('((()))')); // true
console.log(matchParens('((())')); // false
console.log(matchParens('((()))()((((()))))()()()')); // true
console.log(matchParens('((()))()((((())))))))()()()')); // false

function sortStack(stackA) {
  const stackB = [];
  while (stackA.length) {
    const tmp = stackA.pop();
    while (true) {
      if (!stackB.length || tmp >= stackB[stackB.length - 1]) {
        stackB.push(tmp);
        break;
      } else {
        stackA.push(stackB.pop());
      }
    }
  }
  return stackB;
}

// console.log(sortStack([4, 2, 3, 7, 9]));
