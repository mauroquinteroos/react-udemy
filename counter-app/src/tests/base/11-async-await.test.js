import { getImagen } from "../../base/11-async-await";

describe("Test in 11-async-await", () => {
  test("should return image URL", async () => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
