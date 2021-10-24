{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
    syrup?: string;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //public
  //private: 외부에서는 아무도 접근 못함
  //protected: 그 클래스를 상속한 클래스는 접근 가능

  //abstract class 의 경우 이 자체로는 object(instance) 형성 불가능!
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOTS: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //coffeeBeans 를 설정하려면 이 함수를 통해서만 가능! 직접적으로는 불가
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
      console.log(
        `filling ${beans} beans and ${this.coffeeBeans} beans left...`
      );
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOTS) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOTS;
      console.log(`${this.coffeeBeans} beans left...`);
    }

    preheat(): void {
      console.log("heating up...🔥");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, public pumps: number = 0) {
      super(beans);
      this.pumps = pumps;
    }
    private addSyrup(): void {
      console.log(`Pumping syrup ${this.pumps} times...🍭`);
    }

    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16, 2),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16, 1),
  ];

  machines.forEach((machine) => {
    console.log("-----------------------------------------");
    machine.makeCoffee(2);
  });
}
