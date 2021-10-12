{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  //나의 답안
  // function printLoginState2(state: ResourceLoadState) {
  //   if (state.state === "loading") {
  //     console.log("👀 loading...");
  //   }
  //   if (state.state === "success" && state.response.body === "loaded") {
  //     console.log("😃 loaded");
  //   }
  //   if (state.state === "fail" && state.reason === "no network") {
  //     console.log("😱 no network");
  //   }
  // }

  //Ellie's solution
  function printLoginState2(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log("😃 loaded");
        break;
      case "fail":
        console.log("😱 no network");
        break;
      default:
        throw new Error(`unknown state ${state}`);
    }
  }

  printLoginState2({ state: "loading" }); // 👀 loading...
  printLoginState2({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState2({ state: "fail", reason: "no network" }); // 😱 no network
}
