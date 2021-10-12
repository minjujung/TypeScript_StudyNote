{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOTS: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOTS) {
      throw new Error("Not enough coffee beans!");
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOTS;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOTS;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
