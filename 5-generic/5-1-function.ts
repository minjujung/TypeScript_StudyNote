{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  //어떤 type이든 받아서 쓸수 있고
  //쓸 때 type이 결정되게 할 수 있음
  function checkNotNull<T>(arg: T): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  //사용하는 사람이 type을 결정할 수 있으므로 유연!
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
