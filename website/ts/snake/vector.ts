export class Vector2 {
    constructor(public x: number, public y: number) { }

    added(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y)
    }
}

export type Point = Vector2
