{
  //   //JavaScript đ¤Ž
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScript â¨
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript đ¤Ž
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...

  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //TypeScript â¨
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

  //?: string ëë ė¸ėëĄ ėëŦ´ę˛ë ėė í´ė¤ë ëë¤
  printName("Jung");
  printName("Julia", undefined);

  //npm install @types/node --save-dev íëë `ts-node íėŧëĒ` ëĒë šė´ ė ė ėë

  //Default Parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage();

  //Rest Parameter: ė¸ėëĨŧ ę°¯ė ė í ėė´ ë°°ė´ ííëĄ ë°ė ė ėė
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
