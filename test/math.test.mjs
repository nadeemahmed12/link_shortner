import { expect } from "chai"; // Import Chai's expect assertion library
import { add, subtract, concat } from "../math.js"; // Import the functions to be tested
import {describe} from "mocha";
// Describe the test suite for mathUtils
describe("Math Utilities", () => {
  // Test case for add function
  it("should add two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).to.equal(5); // Assert that the result is 5
  });

  // Test case for subtract function
  it("should subtract two numbers correctly", () => {
    const result = subtract(5, 3);
    expect(result).to.equal(2); // Assert that the result is 2
  });

  // Test case for concat function
  it("should concatenate two strings correctly", () => {
    const result = concat("Hello, ", "World!");
    expect(result).to.equal("Hello, World!"); // Assert that the result is 'Hello, World!'
  });
});