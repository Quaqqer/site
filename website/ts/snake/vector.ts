export class Vector2 {
    constructor(public readonly x: number, public readonly y: number) { }

    added(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y)
    }

    equals(other: Vector2): boolean {
        return this.x == other.x && this.y == other.y
    }
}

export type Point = Vector2
