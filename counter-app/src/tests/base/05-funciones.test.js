import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Test in 05-funciones", () => {
  test("getUser should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo should return an object", () => {
    const name = "Mauro";
    const userActiveTest = {
      uid: "ABC567",
      username: name,
    };
    const userActive = getUsuarioActivo(name);
    expect(userActive).toEqual(userActiveTest);
  });
});
