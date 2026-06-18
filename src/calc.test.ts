import {Brick, createBrick} from "./Brick";

describe("Brick", () => {
  it("Should create a Brick", () => {
    const created = createBrick("Express", "5.2.1")

    const express: Brick = {
      name: "Express",
      version: "5.2.1",
    };

    expect(created).toEqual(express);
  });

  it("Catalogs should contains multiples", () => {
    const a = createBrick("a", "5.2.1");
    const b = createBrick("b", "5.2.1");
    const aa = createBrick("a", "5.2.1");

    const catalog = createCatalog([a, b, aa]);

    expect(catalog.bricks).toEqual([a, b]);
  });
});
