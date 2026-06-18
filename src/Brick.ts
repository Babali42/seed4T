type Version = `${string}.${string}` | `${string}.${string}.${string}`;

export interface Brick {
  name: string;
  version: Version;
  // url: string;
}
