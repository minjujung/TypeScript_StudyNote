//Last In First Out
interface GStack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type GStackNode<T> = {
  readonly value: T;
  readonly next?: GStackNode<T>;
};

class GStackImpl<T> implements GStack<T> {
  private _size: number = 0;
  private head?: GStackNode<T>;

  constructor(private capacity: number) {}

  get size(): number {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
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

const gstack = new GStackImpl<string>(10);
gstack.push("minju 1");
gstack.push("minji 2");
gstack.push("gayoung 3");
while (gstack.size !== 0) {
  console.log(gstack.pop());
}

const gstack2 = new GStackImpl<number>(10);
gstack2.push(123);
gstack2.push(456);
gstack2.push(789);
while (gstack2.size !== 0) {
  console.log(gstack2.pop());
}
