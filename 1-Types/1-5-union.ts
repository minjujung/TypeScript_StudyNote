{
  /**
   * Union Types: OR => 활용도 굉장히 높음
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  //function login(id: string, password: string): Promise<LoginState> {
  function login1(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state: LoginState)
  //success -> 🎉 body
  //fail -> 😂 reason

  //별로 권장하지 않는 방법!
  function printLoginState1(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
