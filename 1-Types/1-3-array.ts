{
  //Array
  const fruits: string[] = ["๐", "๐"];
  const scores: Array<number> = [1, 3, 4];
  function printSArray(fruits: readonly string[]) {
    //readonly๋ฅผ ๋ณด์ฅํ  ๋๋ string[] ํํ๋ง ๊ฐ๋ฅ
    //readonly๋ฅผ ๋ถ์ธ fruits ๋ฐฐ์ด์ ํจ์์์์ ๋ฐ๊ฟ ์ ์์!!
  }

  //Tuple: ์๋ก ๋ค๋ฅธ ํ์์ ํจ๊ป ๊ฐ์ง์ ์๋ ๋ฐฐ์ด
  let student: [string, number];
  student = ["name", 21];
  //Tuple๊ฐ์ ๊ฒฝ์ฐ ๋ด๋ถ ์์์ ์ ๊ทผํ  ๋
  //index ๋ก ํํํ๋ฏ๋ก ๋ฑ ๋ดค์ ๋, ์ด๋ค data์ธ์ง ํ์์ด ์ด๋ ค์
  student[0]; // name => student.name
  student[1]; // 21 => student.age(๊ฐ๋์ฑ์ด ๋ ์ข์์ง)
  //๊ทธ๋์!! interface, type alias, class๋ฅผ ๋ ์ถ์ฒ

  // ์ข๋ ๊ฐ๋์ฑ์ ์ข๊ฒ ํ๋ ค๋ฉด
  // data๋ฅผ ์ฌ์ฉํ๋ ๊ณณ์์ name์ด๋ age๋ผ๊ณ  ๋์ ์ผ๋ก ์ด๋ฆ์ ์ ํจ
  const [name, age] = student;

  // ์ ์ฐํ๊ฒ Tuple์ ์ ์ฌ์ฉํ ์๊ฐ React ์ useState Hook
  // const [count, setCount]  = useState(0)
}
