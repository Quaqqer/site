import { Vector2, Point } from "./vector"

export enum Direction {
    Up,
    Down,
    Left,
    Right,
    None,
}

function dirToVec(dir: Direction) {
    switch (dir) {
        case Direction.Up:
            return new Vector2(0, -1)
        case Direction.Down:
            return new Vector2(0, 1)
        case Direction.Left:
            return new Vector2(-1, 0)
        case Direction.Right:
            return new Vector2(1, 0)
        case Direction.None:
            return new Vector2(0, 0)
    }
}

export class Snake {
    segments: Point[] = []

    constructor(public pos: Point) { }

    public grow() {

    }
}

export class GameState {
    public snake: Snake
    public dir = Direction.None

    constructor(public readonly width: number, public readonly height: number) {
        this.snake = new Snake(new Vector2(Math.floor(width / 2), Math.floor(height / 2)))
    }

    public update() {
        this.snake.pos = this.snake.pos.added(dirToVec(this.dir))
    }

    public updateInput(e: KeyboardEvent) {
        switch (e.key) {
            case "ArrowUp":
                this.dir = Direction.Up
                break
            case "ArrowDown":
                this.dir = Direction.Down
                break
            case "ArrowLeft":
                this.dir = Direction.Left
                break
            case "ArrowRight":
                this.dir = Direction.Right
                break
        }
    }
}
