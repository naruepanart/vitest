import { describe, expect, it } from "vitest";

const AddCounter = (num1: number, num2: number) => {
  return num1 + num2;
};

describe("function add", () => {
  const iptest = [
    {
      name: "should return 3",
      i: 1,
      j: 2,
      expected: 3,
    },
    {
      name: "should return 15",
      i: 10,
      j: 5,
      expected: 15,
    },
    {
      name: "should return 0",
      i: 1,
      j: -1,
      expected: 0,
    },
    {
      name: "should return -7",
      i: -2,
      j: -5,
      expected: -7,
    },
    {
      name: "should return 0",
      i: 0,
      j: 0,
      expected: 0,
    },
  ];

  iptest.forEach((v) => {
    it(v.name, () => {
      // Arrange
      const sum = AddCounter(v.i, v.j);
      // Assert
      expect(sum).toBe(v.expected);
    });
  });
});
