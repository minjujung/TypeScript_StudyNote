{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private: 외부에서는 아무도 접근 못함
  //protected: 그 클래스를 상속한 클래스는 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOTS: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    //coffeeBeans 를 설정하려면 이 함수를 통해서만 가능! 직접적으로는 불가
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOTS) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOTS;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(13);
  maker.fillCoffeeBeans(10);
  console.log(maker);

  class User {
    // firstName: string;
    // lastName: string;
    // get fullName(): string {
    //   return `${this.firstName} ${this.lastName}`;
    // }

    // constructor(firstName: string, lastName: string) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    // }

    //위와 동일한 코드
    //constructor 에서 멤버변수를 아래와 같이 설정 가능
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      // if(num < 0) {} 이런식으로 유효성 검사 가능
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Minju", "Jung");
  user.age = 6; //set 호출
  console.log(user);
}
