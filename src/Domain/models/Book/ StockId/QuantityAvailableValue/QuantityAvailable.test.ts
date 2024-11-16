import { QuantityAvailable } from "./QuantityAvailable.js";

describe("QuantityAvailable", () => {
  test('許容される範囲内の在庫数を設定できる', () => {
    const quantityAvailable = new QuantityAvailable(500);
    expect(quantityAvailable.value).toBe(500);
  });

  test('MIN未満の在庫数を設定するとエラーを投げる', () => {
    expect(() => new QuantityAvailable(QuantityAvailable.MIN_VALUE - 1)).toThrow('在庫数は0以上1000000以下でなければなりません');
  });

  test('MAXより大きい在庫数を設定するとエラーを投げる', () => {
    expect(() => new QuantityAvailable(QuantityAvailable.MAX_VALUE + 1)).toThrow('在庫数は0以上1000000以下でなければなりません');
  });

  describe('increment', () => {
    test('正の数を加算できる', () => {
      const quantityAvailable = new QuantityAvailable(500);
      const incrementedQuantityAvailable = quantityAvailable.increment(100);
      expect(incrementedQuantityAvailable.value).toBe(600);
    });

    test('最大数を超える数を加算するとエラーを投げる', () => {
      const quantityAvailable = new QuantityAvailable(QuantityAvailable.MAX_VALUE);
      expect(() => quantityAvailable.increment(1)).toThrow('在庫数は0以上1000000以下でなければなりません');
    });
  });

  describe('decrement', () => {
    test('正の数を減算できる', () => {
      const quantityAvailable = new QuantityAvailable(500);
      const decrementedQuantityAvailable = quantityAvailable.decrement(100);
      expect(decrementedQuantityAvailable.value).toBe(400);
    });

    test('最小数を下回る数を減算するとエラーを投げる', () => {
      const quantityAvailable = new QuantityAvailable(QuantityAvailable.MIN_VALUE);
      expect(() => quantityAvailable.decrement(1)).toThrow('在庫数は0以上1000000以下でなければなりません');
    });
  });
});
