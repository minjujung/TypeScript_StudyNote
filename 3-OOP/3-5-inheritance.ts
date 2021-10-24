{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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

  //공통적인 기능은 상속하면서 자식 class에서 특화된 기늗들을 추가 가능
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

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "loveya");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(`serial#: ${latteMachine.serialNumber}`);
}
