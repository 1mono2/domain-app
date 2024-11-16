import { Status, StatusEnum } from "./Status.js";

describe("Status", () => {
  test("デフォルト値でStatusを作成できる", () => {
    const status = new Status();
    expect(status.value).toBe(StatusEnum.InStock);
  });

  test("指定された値でStatusを作成できる", () => {
    const status = new Status(StatusEnum.LowStock);
    expect(status.value).toBe(StatusEnum.LowStock);
  });

  test("無効な値でStatusを作成するとエラーを投げる", () => {
    expect(() => new Status("InvalidStatus" as StatusEnum)).toThrow("無効な在庫ステータスです");
  });

  describe("toLabel", () => {
    test("InStockの場合、「在庫あり」を返す", () => {
      const status = new Status(StatusEnum.InStock);
      expect(status.toLabel()).toBe("在庫あり");
    });

    test("LowStockの場合、「残りわずか」を返す", () => {
      const status = new Status(StatusEnum.LowStock);
      expect(status.toLabel()).toBe("残りわずか");
    });

    test("OutOfStockの場合、「在庫切れ」を返す", () => {
      const status = new Status(StatusEnum.OutOfStock);
      expect(status.toLabel()).toBe("在庫切れ");
    });
  });
});
