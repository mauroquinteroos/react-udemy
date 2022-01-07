describe("Test in demo.test.js", () => {
  test("The two string must be the same", () => {
    // 1. Inicializacion
    const message1 = "Hello world";

    // 2. Estimulo
    const message2 = "Hello world";

    // 3. Observar el comportamiento
    expect(message1).toBe(message2);
  });
});
