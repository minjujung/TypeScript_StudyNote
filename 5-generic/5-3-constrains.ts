interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }

  workPartTime() {}
}

// 세부적인 type(PartTypeEmployee)을 받아서 정말 추상적인 type(Employee)으로 다시 리턴하는 함수는 🤮
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const minju = new FullTimeEmployee();
const steve = new PartTimeEmployee();

const minjuAfterPay = pay(minju); //full time!
const steveAfterPay = pay(steve); //part time!

const obj = {
  name: "minju",
  age: "26",
};

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

console.log(getValue(obj, "name"));
