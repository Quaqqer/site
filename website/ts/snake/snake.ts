import * as colors from "./colors"

const TILE_SIZE: number = 20

let canvas = document.getElementById("snakeCanvas") as HTMLCanvasElement
let window = document.defaultView
let ctx = canvas.getContext("2d");

enum Direction {
    Up,
    Down,
    Left,
    Right,
    None,
}

function dirToVec(dir: Direction) {
    switch (dir) {
        case Direction.Up:
            return new Vector(0, -1)
        case Direction.Down:
            return new Vector(0, 1)
        case Direction.Left:
            return new Vector(-1, 0)
        case Direction.Right:
            return new Vector(1, 0)
        case Direction.None:
            return new Vector(0, 0)
    }
}

class Point {
    constructor(public x: number, public y: number) { }

    added(other: Point): Point {
        return new Point(this.x + other.x, this.y + other.y)
    }
}

const Vector = Point

class Snake {
    segments: Point[] = []

    constructor(public pos: Point) { }

    public grow() {

    }
}

class GameState {
    public snake: Snake
    public dir = Direction.None

    constructor(public readonly width: number, public readonly height: number) {
        this.snake = new Snake(new Point(Math.floor(width / 2), Math.floor(height / 2)))
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

class Renderer {
    constructor(private readonly gs: GameState) { }

    private drawTile(pos: Point, color: string) {
        ctx.beginPath()
        ctx.rect(pos.x * TILE_SIZE, pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }

    private drawBackground() {
        ctx.beginPath()
        ctx.rect(0, 0, this.gs.width * TILE_SIZE, this.gs.height * TILE_SIZE)
        ctx.fillStyle = colors.BACKGROUND
        ctx.fill()
        ctx.closePath()
    }

    private drawSnake() {
        this.drawTile(this.gs.snake.pos, colors.SNAKE)
    }

    private internal_render() {
        this.drawBackground()
        this.drawSnake()
    }

    public render() {
        requestAnimationFrame(() => { this.internal_render() })
    }
}

async function run() {
    let width = Math.floor(canvas.width / TILE_SIZE)
    let height = Math.floor(canvas.height / TILE_SIZE)

    let gs = new GameState(width, height)
    let renderer = new Renderer(gs)

    window.addEventListener("keydown", (e) => { gs.updateInput(e) }, false)

    while (true) {
        gs.update()
        renderer.render()

        await new Promise(r => setTimeout(r, 200))
    }
}

run()
