{
  //Array
  const fruits: string[] = ["🍋", "🍎"];
  const scores: Array<number> = [1, 3, 4];
  function printSArray(fruits: readonly string[]) {
    //readonly를 보장할 때는 string[] 형태만 가능
    //readonly를 붙인 fruits 배열은 함수안에서 바꿀 수 없음!!
  }

  //Tuple: 서로 다른 타입을 함께 가질수 있는 배열
  let student: [string, number];
  student = ["name", 21];
  //Tuple같은 경우 내부 요소에 접근할 때
  //index 로 표현하므로 딱 봤을 때, 어떤 data인지 파악이 어려움
  student[0]; // name => student.name
  student[1]; // 21 => student.age(가독성이 더 좋아짐)
  //그래서!! interface, type alias, class를 더 추천

  // 좀더 가독성을 좋게 하려면
  // data를 사용하는 곳에서 name이랑 age라고 동적으로 이름음 정함
  const [name, age] = student;

  // 유연하게 Tuple을 잘 사용한 예가 React 의 useState Hook
  // const [count, setCount]  = useState(0)
}
