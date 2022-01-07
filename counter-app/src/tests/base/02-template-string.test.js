import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Test in 02-template-string", () => {
  test("getSaludo method must return Hola Mauro", () => {
    const name = "Mauro";
    const greeting = getSaludo(name);

    expect(greeting).toBe("Hola " + name);
  });
});
