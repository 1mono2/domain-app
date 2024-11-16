import { ValueObject } from "../../../shared/ValueObject.js";

export enum StatusEnum {
  InStock = "InStock",
  LowStock = "LowStock",
  OutOfStock = "OutOfStock"
}

export type StatusLabel = '在庫あり' | '残りわずか' | '在庫切れ';

type StatusValue = StatusEnum;
export class Status extends ValueObject<StatusValue, "Status"> {
  constructor(value: StatusValue = StatusEnum.InStock) {
    super(value);
  }

  protected validate(value: StatusValue): void {
    if (!Object.values(StatusEnum).includes(value)) {
      throw new Error('無効な在庫ステータスです');
    }
  }

  toLabel(): StatusLabel {
    switch (this._value) {
      case StatusEnum.InStock:
        return '在庫あり';
      case StatusEnum.LowStock:
        return '残りわずか';
      case StatusEnum.OutOfStock:
        return '在庫切れ';
    }
  }
}
