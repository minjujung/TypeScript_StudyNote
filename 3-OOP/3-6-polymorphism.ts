{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    syrup?: string;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //public
  //private: 외부에서는 아무도 접근 못함
  //protected: 그 클래스를 상속한 클래스는 접근 가능

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOTS: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shot...:)`);
      return {
        shots,
        hasMilk: false,
      };
    }

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

    //super라는 키워드로 부모 클래스에 있는 함수들을 호출하거나 접근 가능
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
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

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSyrup();
      return {
        ...coffee,
        syrup: `${this.pumps} times`,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16, 2),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16, 1),
  ];

  machines.forEach((machine) => {
    machine.makeCoffee(2);
    console.log("-----------------------------------------");
  });

  const machine = new CoffeeMachine(23);
  const sweetCoffeeMachine = new SweetCoffeeMaker(27);
  const sweetCoffee = sweetCoffeeMachine.makeCoffee(2);
  console.log(sweetCoffee);
}
