{
  //discriminated: 구분되는

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
  //success -> 🎉 body
  //fail -> 😂 reason

  function printLoginState(state: LoginState) {
    //result 라는 공통요소가 있을 때
    //Union Types를 사용할 때 어떤 케이스든 공통적인 프로퍼티를
    //가지고 있음으로서 조금 더 구분하기 쉽게 만든다!
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😂 ${state.reason}`);
    }
  }
}
