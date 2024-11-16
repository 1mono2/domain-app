import { ValueObject } from "../../../shared/ValueObject.js";

type QuantityAvailableValue = number;
export class QuantityAvailable extends ValueObject<QuantityAvailableValue, "QuantityAvailableValue"> {
  static readonly MAX_VALUE = 1000000;
  static readonly MIN_VALUE = 0;

  constructor(value: QuantityAvailableValue = 0) {
    super(value);
  }

  protected validate(value: QuantityAvailableValue): void {
    if (value < QuantityAvailable.MIN_VALUE || QuantityAvailable.MAX_VALUE < value) {
      throw new Error(`在庫数は${QuantityAvailable.MIN_VALUE}以上${QuantityAvailable.MAX_VALUE}以下でなければなりません`);
    }
  }


  increment(amount: number): QuantityAvailable {
    const newValue = this.value + amount;

    return new QuantityAvailable(newValue);
  }

  decrement(amount: number): QuantityAvailable {
    const newValue = this.value - amount;

    return new QuantityAvailable(newValue);
  }
}   
