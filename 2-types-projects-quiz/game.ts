/**
 * Let's make a game 🕹
 */
type Direction = "up" | "down" | "left" | "right";
const position = { x: 0, y: 0 };

function move1(way: Direction) {
  switch (way) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      throw new Error("unknown way");
  }
}
console.log(position); // { x: 0, y: 0}
move1("up");
console.log(position); // { x: 0, y: 1}
move1("down");
console.log(position); // { x: 0, y: 0}
move1("left");
console.log(position); // { x: -1, y: 0}
move1("right");
console.log(position); // { x: 0, y: 0}
