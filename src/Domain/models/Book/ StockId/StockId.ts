import { ValueObject } from "../../shared/ValueObject.js";
import { nanoid } from "nanoid";

type StockIdValue = string;
export class StockId extends ValueObject<StockIdValue, "StockId"> {
  static readonly MAX_LENGTH = 100;
  static readonly MIN_LENGTH = 1;

  constructor(value: StockIdValue = nanoid()) { // デフォルト値をnanoidを利用して生成
    super(value);
  }

  protected validate(value: StockIdValue): void {
    if (value.length < StockId.MIN_LENGTH || StockId.MAX_LENGTH < value.length) {
      throw new Error(`StockIdは${StockId.MIN_LENGTH}文字以上${StockId.MAX_LENGTH}文字以下でなければなりません`);
    }
  }
}
