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

: class 내부에 뭐가 많을 때 어떤식으로 사용하면 좋을 지 안내, 도와주는 역할, 쉽게 파악할 수 있도록

1. private같은 제어자로 애초에 class 외부에서 사용할 수있는 함수를 제한해주는 것 자체가 abstraction

이라고도 할 수 있음! 보여주는 것만 사용해라 이런 느낌!
