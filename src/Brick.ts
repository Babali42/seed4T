type Version = `${string}.${string}` | `${string}.${string}.${string}`;

export interface Brick {
  name: string;
  version: Version;
  // url: string;
}

export function createBrick(name: string, version: Version): Brick {
  return {
    name,
    version,
  };
}

export class CatalogBuilder {
  private bricks: Set<Brick> = new Set();

  add(brick: Brick): CatalogBuilder {
    this.bricks.add(brick);
    return this;
  }

  build(): Set<Brick> {
    return this.bricks;
  }
}
