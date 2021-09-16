{
  //   //JavaScript 🤮
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScript ✨
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript 🤮
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...

  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //TypeScript ✨
  //   function FetchNum(id: string): Promise<number> {
  //     // code...
  //     // code...

  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Minju", "Jung");

  //?: string 또는 인자로 아무것도 안전해줘도 된다
  printName("Jung");
  printName("Julia", undefined);

  //npm install @types/node --save-dev 했더니 `ts-node 파일명` 명령어 정상 작동

  //Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage();

  //Rest Parameter: 인자를 갯수 제한 없이 배열 형태로 받을 수 있음
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
