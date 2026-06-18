import { Brick, createBrick, CatalogBuilder } from "./Brick";

describe("Brick", () => {
  it("Should create a Brick", () => {
    const created = createBrick("Express", "5.2.1");

    const express: Brick = {
      name: "Express",
      version: "5.2.1",
    };

    expect(created).toEqual(express);
  });

  // version test, version should be an array of multiple versions
  // and when creating a brick without precising the version,
  // it should default to "latest" // highest version

  it("should not have a Catalog with duplicates bricks", () => {
    const a = createBrick("a", "5.2.1");
    const b = createBrick("b", "5.2.1");
    const aa = createBrick("a", "5.2.1");
    const list = [a, b, aa];

    const catalogBuilder = new CatalogBuilder();

    catalogBuilder.add(a).add(b).add(aa);

    const uniqueList = new Set(list);

    expect(catalogBuilder.build()).toEqual(uniqueList);
  });
});
