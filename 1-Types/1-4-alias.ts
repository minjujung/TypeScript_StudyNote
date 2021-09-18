{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = "minju";

  const address: Text = "Korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Doi",
    age: 26,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let minjuName: Name;
  minjuName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isDog: Boal = true;
}
