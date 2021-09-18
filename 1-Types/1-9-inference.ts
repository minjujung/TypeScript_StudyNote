/**
 * Type Inference: 권장하지는 않음..정말 당연한것만 생략하자!
 */

//선언함과 동시에 string으로 type이 정해짐
let text = "hello";
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);
