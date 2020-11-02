class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    return this.first === null;
  }

  display() {
    let node = this.first;
    let str = '';
    while (node !== null) {
      str += node.value + ', ';
      node = node.next;
    }
    return str;
  }
}

function main() {
  const starTrekQ = new Queue();

  console.log(starTrekQ.isEmpty());

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  console.log(starTrekQ.peek());
  console.log(starTrekQ.isEmpty());
  console.log(starTrekQ.display());

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  console.log(starTrekQ.display());
}

main();
