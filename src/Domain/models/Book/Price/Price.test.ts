import { Price } from "./Price.js";

describe("Price", () => {
  test("正しい値と通貨コードJPYで有効なPriceを作成する", () => {
    const validAmount = 500;
    const price = new Price({ amount: validAmount, currency: "JPY" });
    expect(price.amount).toBe(validAmount);
    expect(price.currency).toBe("JPY");
  });

  // 異常系
  test('無効な通貨コードの場合エラーを投げる', () => {
    const invalidCurrency = "USD";
    // @ts-expect-error
    expect(() => new Price({ amount: 500, currency: invalidCurrency })).toThrow("通貨が不正です");
  });

  test("MIN未満の値でPriceを生成するとエラーを投げる", () => {
    const invalidAmount = Price.MIN - 1;
    expect(() => new Price({ amount: invalidAmount, currency: "JPY" })).toThrow(`価格は${Price.MIN}円以上${Price.MAX}円以下でなければなりません`);
  });

  test("MAXより大きい値でPriceを生成するとエラーを投げる", () => {
    const invalidAmount = Price.MAX + 1;
    expect(() => new Price({ amount: invalidAmount, currency: "JPY" })).toThrow(`価格は${Price.MIN}円以上${Price.MAX}円以下でなければなりません`);
  });
});
