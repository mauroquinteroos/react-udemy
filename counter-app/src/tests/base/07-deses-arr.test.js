import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Test in 07-deses-arreglo", () => {
  test("retornaArreglo should return an array", () => {
    const [letters, numbers] = retornaArreglo();

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
  });
});
