import { Point } from "./vector"
import { GameState } from "./gamestate"
import * as colors from "./colors"

export const TILE_SIZE: number = 20

export class Renderer {
    private ctx: CanvasRenderingContext2D
    constructor(private readonly gs: GameState, canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d")
    }

    private drawTile(pos: Point, color: string) {
        this.ctx.beginPath()
        this.ctx.rect(pos.x * TILE_SIZE, pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        this.ctx.fillStyle = color
        this.ctx.fill()
        this.ctx.closePath()
    }

    private drawBackground() {
        this.ctx.beginPath()
        this.ctx.rect(0, 0, this.gs.width * TILE_SIZE, this.gs.height * TILE_SIZE)
        this.ctx.fillStyle = colors.BACKGROUND
        this.ctx.fill()
        this.ctx.closePath()
    }

    private drawSnake() {
        this.drawTile(this.gs.snake.pos, colors.SNAKE)

        for (let segment of this.gs.snake.segments) {
            this.drawTile(segment, colors.SNAKE)
        }
    }

    private internal_render() {
        this.drawBackground()
        this.drawSnake()
    }

    public render() {
        requestAnimationFrame(() => { this.internal_render() })
    }
}

