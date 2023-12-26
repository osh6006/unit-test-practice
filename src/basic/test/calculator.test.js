const calculator = require("../test/calculator");

describe("Calculator 테스트", () => {
  // 각각의 테스트는 독립적으로 작성되어야 하기 때문에
  // 중복적인 값을 선언하려면 beforeEach를 작성해야 합니다.
  let cal;
  let value;

  beforeEach(() => {
    cal = new calculator();
  });

  it("초기화 값은 0이 되어야 합니다.", () => {
    expect(cal.value).toBe(0);
  });

  it("set으로 10을 초기화 하면 10이 되어야 합니다.", () => {
    cal.set(10);
    expect(cal.value).toBe(10);
  });

  it("clear를 호출하면 0이 되어야 합니다.", () => {
    cal.set(10);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("1과 2를 더하면 0이 되어야 합니다.", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("2에서 1을 빼면 1이 되어야 합니다.", () => {
    cal.set(2);
    cal.subtract(1);
    expect(cal.value).toBe(1);
  });

  it("1과 2를 곱하면 2가 되어야 합니다.", () => {
    cal.set(1);
    cal.multiply(2);
    expect(cal.value).toBe(2);
  });

  describe("devides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("0 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("3 / 2 === Infinity", () => {
      cal.set(3);
      cal.divide(2);
      expect(cal.value).toBe(1.5);
    });
  });

  // 에러 테스트
  it("add 함수는 100이상인 값에서 에러를 던져야 합니다.", () => {
    expect(() => {
      cal.add(1230);
    }).toThrow("값이 100 이상은 될 수 없습니다!");
  });

  // 비동기 테스트
  it("add 함수는 100이상인 값에서 에러를 던져야 합니다.", () => {
    expect(() => {
      cal.add(1230);
    }).toThrow("값이 100 이상은 될 수 없습니다!");
  });
});
