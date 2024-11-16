import { Title } from "./Title.js"

describe("Title", () => {
  test("Titleが1文字で作成できる", () => {
    expect(new Title("a").value).toBe("a");
  });

  test("Titleが1000文字で作成できる", () => {
    const longTitle = "a".repeat(Title.MAX_LENGTH);
    expect(new Title(longTitle).value).toBe(longTitle);
  });

  test('最小長未満の値でTitleを生成するとエラーを投げる', () => {
    expect(() => new Title('')).toThrow(`タイトルは${Title.MIN_LENGTH}文字以上${Title.MAX_LENGTH}文字以下でなければなりません`);
  });

  test('最大長より長い値でTitleを生成するとエラーを投げる', () => {
    const longTitle = "a".repeat(Title.MAX_LENGTH + 1);
    expect(() => new Title(longTitle)).toThrow(`タイトルは${Title.MIN_LENGTH}文字以上${Title.MAX_LENGTH}文字以下でなければなりません`);
  });
});
