//Last In First Out
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type _StackNode = {
  readonly value: string;
  readonly next?: _StackNode;
};

class _StackImpl implements Stack {
  private _size: number = 0;
  private head?: _StackNode;

  constructor(private capacity: number) {}

  get size(): number {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: _StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    //null과 undefined 둘다 거르기 위해 `== null`로 체크
    if (this.head == null) {
      throw new Error("Stack is Empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const _stack = new _StackImpl(10);
_stack.push("minju 1");
_stack.push("minji 2");
_stack.push("gayoung 3");
while (_stack.size !== 0) {
  console.log(_stack.pop());
}
