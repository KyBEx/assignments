const chai = require("chai");
const assert = chai.assert;

const isPalindrome = require("../index");

const tests = {
    case1: "Star Rats!",
    case2: "palindrome",
    case3: "I madam, I made radio! So I dared! Am I mad?? Am I?!"
};

describe ("checks string, returns true if it's a palindrome", () => {
    it ("should return true", () => {
        assert.equal(isPalindrome(tests.case1), true);
    });
    it ("should return false", () => {
        assert.equal(isPalindrome(tests.case2), false);
    });
    it ("should return true", () => {
        assert.equal(isPalindrome(tests.case3), true);
    });
});

const test = ["Star Rats!", "palindrome", "I madam, I made radio! So I dared! Am I mad?? Am I?"];

describe("checks if str is palindrome", () => {
    it("should return true", () => {
        assert(isPalindrome(test[0]));
        assert(isPalindrome(test[2]));
    });
    it("should return false", () => {
        assert(!isPalindrome(test[1]));
    });
});