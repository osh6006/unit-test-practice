const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  // 콜백 함수 안에서 작성
  // sum을 수행하면 3이 나와야 한다.
  expect(sum(1, 2)).toBe(3);
});
