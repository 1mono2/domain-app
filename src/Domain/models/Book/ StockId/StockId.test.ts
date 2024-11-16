import { StockId } from "./StockId.js";

vi.mock("nanoid", () => ({
  nanoid: vi.fn().mockReturnValue("testIdWithExactLength"),
}));

describe("StockId", () => {
  test("デフォルト値が100文字で作成できる", () => {
    const stockId = new StockId();
    expect(stockId.value).toBe("testIdWithExactLength");
  });

  test('指定された値でStockIdを生成する', () => {
    const stockId = new StockId("testId");
    expect(stockId.value).toBe("testId");
  });

  test('最小長未満の値でStockIdを生成するとエラーを投げる', () => {
    expect(() => new StockId('')).toThrow(`StockIdは${StockId.MIN_LENGTH}文字以上${StockId.MAX_LENGTH}文字以下でなければなりません`);
  });

  test('最大長より長い値でStockIdを生成するとエラーを投げる', () => {
    const longStockId = "a".repeat(StockId.MAX_LENGTH + 1);
    expect(() => new StockId(longStockId)).toThrow(`StockIdは${StockId.MIN_LENGTH}文字以上${StockId.MAX_LENGTH}文字以下でなければなりません`);
  });
});