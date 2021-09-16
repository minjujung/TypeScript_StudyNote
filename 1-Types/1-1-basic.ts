{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  //number
  const num: number = -6;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //null 보다는 undefined 많이 사용
  //undefined: 비었는지 안비었는지 모른다
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null: 비었다
  let person: string | null;

  //unknown => 🙅🏻‍♀️X(최대한 쓰지마욧!)
  //JavaScript랑 연동해서 사용할 수 있으므로 생겼지만 사용 되도록 X
  let notSure: unknown = 0;
  notSure = "hello";
  notSure = true;

  //any => 🙅🏻‍♀️X(최대한 쓰지마욧!)
  let anything: any = 0;
  anything = "hello";

  //void: 함수에서 리턴값 없을 때
  function print(): void {
    console.log("hi");
    return;
  }

  //never => 함수에서 절대 뭔가를 리턴하지 않는 경우
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while (true) {}
  }

  //object 🙅🏻‍♀️X(최대한 쓰지마욧!)
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: "minju" });
  acceptSomeObject({ animal: "cat" });
}
