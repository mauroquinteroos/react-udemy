import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Test in 08-imp-expe (ID)", () => {
  test("should return an hero by ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === 1);

    expect(hero).toEqual(heroData);
  });

  test("should return undefined", () => {
    const id = 10;
    const hero = getHeroeById(id);
    const heroData = heroes.find((h) => h.id === id);

    expect(hero).toBe(heroData);
  });
});

describe("Test in 08-imp-expe (Owner)", () => {
  test("should return an hero by Owner - DC", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);
    const heroData = heroes.filter((h) => h.owner === owner);

    expect(hero).toEqual(heroData);
  });

  test("should return an hero by Owner - Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);
    const heroData = heroes.filter((h) => h.owner === owner);

    expect(hero.length).toBe(heroData.length);
  });
});
