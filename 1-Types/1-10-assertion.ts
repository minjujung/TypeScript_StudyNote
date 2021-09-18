/**
 * Type Assertions: 그렇게 좋지않음. 불가피한 경우만 사용하자
 */
{
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // 함수의 return 값 type이 any이므로 string 관련된 함수를 그냥 쓸 수 없음
  // 정말 정말 100% (result가 string이라고) 장담할 때만 사용
  console.log((result as string).length);
  console.log((<string>result).length);

  //코드를 작성할 때는 에러 안뜨는 데 실행시면 발생
  //JavaScript와 똑같아지는것이므로 권장X
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; //이것도 number[]이라고 100% 장담할 때만!
  numbers.push(2);
}
