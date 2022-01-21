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
    public segments: Point[] = []
    private enqueued_grows: number = 2
    public dir: Direction = Direction.None

    constructor(public pos: Point) { }

    public grow() {
        this.enqueued_grows++
    }

    public move() {
        if (this.segments.length != 0) {
            this.segments.splice(0, 0, this.pos)

            if (this.enqueued_grows > 0 && this.dir != Direction.None) {
                this.enqueued_grows--
            } else {
                this.segments.pop()
            }
        } else if (this.enqueued_grows > 0 && this.dir != Direction.None) {
            this.segments.push(this.pos)
            this.enqueued_grows--
        }

        this.pos = this.pos.added(dirToVec(this.dir))
    }

    public containsPoint(point: Point): boolean {
        return this.pos.equals(point) || this.segments.findIndex((segment) => { segment.equals(point) }) != -1
    }
}

export class GameState {
    public readonly snake: Snake
    public readonly fruit: Point[] = []

    constructor(public readonly width: number, public readonly height: number) {
        this.snake = new Snake(new Vector2(Math.floor(width / 2), Math.floor(height / 2)))
        this.fruit.push(this.findEmptySpace())
    }

    private findEmptySpace(): Point {
        let p: Point

        do {
            let x = Math.floor(Math.random() * this.width)
            let y = Math.floor(Math.random() * this.height)
            p = new Vector2(x, y)
        } while (this.isOccupied(p))

        return p
    }

    private isOccupied(point: Point): boolean {
        return this.snake.containsPoint(point)
    }

    public update() {
        this.snake.move()
    }

    public updateInput(e: KeyboardEvent) {
        switch (e.key) {
            case "ArrowUp":
                this.snake.dir = Direction.Up
                break
            case "ArrowDown":
                this.snake.dir = Direction.Down
                break
            case "ArrowLeft":
                this.snake.dir = Direction.Left
                break
            case "ArrowRight":
                this.snake.dir = Direction.Right
                break
        }
    }
}
