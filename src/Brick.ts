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
  private bricks: Brick[] = [];

  add(brick: Brick): CatalogBuilder {
    if (this.bricks.some((b) => b.name === brick.name)) {
      return this;
    }
    this.bricks.push(brick);
    return this;
  }

  build(): Brick[] {
    return this.bricks;
  }
}

export class Cart {
  bricks: Brick[] = [];
  add(a: Brick) {
    this.bricks.push(a);
  }

  remove(b: Brick) {
    this.bricks = this.bricks.filter(x => x.name !== b.name);
  }
}