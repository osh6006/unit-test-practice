const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("true를 전달하면 onSuccess함수가 실행되어야 한다.", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("false를 전달하면 onFail함수가 실행되어야 한다.", () => {
    check(() => false, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail).toHaveBeenCalledTimes(1);

    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onFail).toHaveBeenCalledWith("no");

    // expect(onFail.mock.calls.length).toBe(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
