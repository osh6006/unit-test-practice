const fetchDog = require("./async");

describe("비동기", () => {
  // 조금 느림 기다리기 때문
  it("async - done", (done) => {
    fetchDog().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
      done();
    });
  });

  // 바로 확인 가능
  it("async - return", () => {
    return fetchDog().then((item) => {
      expect(item).toEqual({ item: "milk", price: 200 });
    });
  });

  // await 할 떄 사용
  it("async - await", async () => {
    const product = await fetchDog();
    expect(product).toEqual({ item: "milk", price: 200 });
  });

  // 성공하는 케이스 확인
  it("async - resolves", () => {
    expect(fetchDog()).resolves.toEqual({ item: "milk", price: 200 });
  });

  // 실패하는 케이스 확인
  it("async - rejects", () => {
    expect(fetchDog("error")).rejects.toBe("network error");
  });
});
