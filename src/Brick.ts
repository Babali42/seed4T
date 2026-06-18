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
  }
}
