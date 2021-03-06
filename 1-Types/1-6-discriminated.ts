{
  //discriminated: ๊ตฌ๋ถ๋๋

  //function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  //function login(id: string, password: string): Promise<LoginState> {
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state: LoginState)
  //success -> ๐ body
  //fail -> ๐ reason

  function printLoginState(state: LoginState) {
    //result ๋ผ๋ ๊ณตํต์์๊ฐ ์์ ๋
    //Union Types๋ฅผ ์ฌ์ฉํ  ๋ ์ด๋ค ์ผ์ด์ค๋  ๊ณตํต์ ์ธ ํ๋กํผํฐ๋ฅผ
    //๊ฐ์ง๊ณ  ์์์ผ๋ก์ ์กฐ๊ธ ๋ ๊ตฌ๋ถํ๊ธฐ ์ฝ๊ฒ ๋ง๋ ๋ค!
    if (state.result === "success") {
      console.log(`๐ ${state.response.body}`);
    } else {
      console.log(`๐ ${state.reason}`);
    }
  }
}
