import { ValueObject } from "../../shared/ValueObject.js";

export class BookId extends ValueObject<string, "BookId"> {
  static MAX_LENGTH = 13;
  static MIN_LENGTH = 10;

  constructor(value: string) {
    super(value);
  }

  validate(isbn: string): void {
    if (isbn.length < BookId.MIN_LENGTH || BookId.MAX_LENGTH < isbn.length) {
      throw new Error("ISBNの長さが不正です");
    }

    if (!this.isValidIsbn10(isbn) && !this.isValidIsbn13(isbn)) {
      throw new Error("ISBNの形式が不正です");
    }
  }

  isValidIsbn10(isbn: string): boolean {
    return isbn.length === 10;
  }

  isValidIsbn13(isbn: string): boolean {
    return isbn.startsWith("978") && isbn.length === 13;
  }

  toISBN(): string {
    if (this._value.length === 10) {
      const groupIdentifier = this._value.substring(0, 1);
      const publisherIdentifier = this._value.substring(1, 3);
      const bookCode = this._value.substring(3, 9);
      const checksum = this._value.substring(9);

      return `ISBN${groupIdentifier}-${publisherIdentifier}-${bookCode}-${checksum}`;
    } else {
      const isbnPrefix = this._value.substring(0, 3);
      const groupIdentifier = this._value.substring(3, 4);
      const publisherIdentifier = this._value.substring(4, 6);
      const bookCode = this._value.substring(6, 12);
      const checksum = this._value.substring(12);

      return `ISBN${isbnPrefix}-${groupIdentifier}-${publisherIdentifier}-${bookCode}-${checksum}`;
    }
  }
}
