import { ValueObject } from "../../shared/ValueObject.js";

interface PriceValue {
  amount: number;
  currency: "JPY"; // USDなどを追加する場合はここを変更する
}

export class Price extends ValueObject<PriceValue, "Price"> {
  static readonly MAX = 1000000;
  static readonly MIN = 1;

  constructor(value: PriceValue) {
    super(value);
  }

  protected validate(value: PriceValue): void {
    if (value.currency !== "JPY") {
      throw new Error("通貨が不正です");
    }

    if (value.amount < Price.MIN || Price.MAX < value.amount) {
      throw new Error(`価格は${Price.MIN}円以上${Price.MAX}円以下でなければなりません`);
    }
  }

  get amount(): number {
    return this._value.amount;
  }

  get currency(): string {
    return this._value.currency;
  }
}
