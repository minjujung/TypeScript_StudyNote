## 엘리님 강의를 들으며 메모할 것 써두는 메모장

<br/>

#### 절차 지향적(함수형) 프로그램의 단점

- 사이드 이펙트 발생 할 수 있음
- 유지 보수, 확장성 저하

#### 객체 지향적 프로그램

- 반복되는 걸 재사용
- 확장성 증가

<br />

### class의 인스턴스가 object, data 는 field, 함수는 method

<br />

### OOP(Object Oriented Programming)특징

- **`encapsulation(캡슐화)`** : 관련있는 데이터와 함수를 캡슐화
- **`abstraction(추상화)`**: 외부에서는 내부가 어떻게 구성되어 있는 지 몰라도 사용가능
- **`inheritance(상속)`**: 정의해놓은걸 재사용 가능
- **`polymorphism(다형성)`**

#### encapsulation

- public, private, protected 를 적절하게 사용하여 class 내부의 상태값이나 method를

얼마나 보여주고, 얼마나 숨길건지 잘 정해주기

- public : 모두 접근 가능 굳이 public 선언 안해줘도, 아무것도 안써져있으면 public임

- private : 외부에서 접근 불가능

- protected: 상속받은 class에서만 접근 가능

#### abstraction

- class 내부에 뭐가 많을 때 어떤식으로 사용하면 좋을 지 안내, 도와주는 역할, 쉽게 파악할 수 있도록

- private같은 제어자로 애초에 class 외부에서 사용할 수있는 함수를 제한해주는 것 자체가 abstraction

이라고도 할 수 있음! 보여주는 것만 사용해라 이런 느낌!

#### inheritance

- 부모를 상속하면 자식 클래스에서는 부모의 기능들을 그대로 쓸 수 있으면서 자기만의 특정 기능도

  추가 가능!!

- 자식 클래스에서 부모 클래스에 있는 method를 재정의 (덮어쓰기) 할 수 있음! 이때 사용하는 게 `super`

- 하지만 typescript에서는 **`두가지 이상의 class를 상속 받을 수 없음!! 하나씩만 가능`**

  => 따라서 너무 수직적인 관계가 될 수 있음!!

#### composition ✨

- 원하는 기능을 class로 구현해서 사용하기, 그러면 상속하지 않고 class 내부에서 class를 호출해서

사용하면 된다!!

- class 내부에서 사용하는 class를 `constructor에서 선언해줄 때, interface로 선언`해주고 그 interface를

implements하는 class를 변수로 넣어주면 더 다양한 객체 생성 가능!!

#### abstract

- abstract의 class의 경우 직접적으로 instance를 생성 할 수 없다.

- abstract class 내부의 abstract method는 구현사항을 전혀 정의 하지 않고 `abstract class를 상속한`

`class 에서는 반드시 정의 해야하는 method가 된다!` 따라서 super 키워드는 사용X

### Generic을 이용해서 클래스나 함수가 사용 될때 type을 정할 수 있다! 훨씬 유동적!
