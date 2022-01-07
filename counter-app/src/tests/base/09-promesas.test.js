import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Test in 09-promesas", () => {
  test("Should return a Hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);
      done();
    });
  });

  test("Should return undefined", (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toEqual(heroes[0]);
        done();
      })
      .catch((err) => {
        expect(err).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
