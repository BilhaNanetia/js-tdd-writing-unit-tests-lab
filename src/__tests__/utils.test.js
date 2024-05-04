import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {

    expect(isPalindrome("racecar")).toBe(true);

  });

  it("returns false for a non-palindrome word", () => {

    expect(isPalindrome("car")).toBe(false);

  });

  it("returns true for words with both uppercase and lowercase letters", () => {

    expect(isPalindrome("RaCeCAr")).toBe(true);
  });

  it("returns false for an empty string", () => {

    expect(isPalindrome("")).toBe(false);

  });

  it("throws an error for input that isn't a string", () => {

    expect(() => {
      isPalindrome(12345);
    }).toThrow();

  });

  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => {
      isPalindrome("12345");
    }).toThrow();

  });

});