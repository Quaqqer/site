import { Point } from "./vector";
import { GameState } from "./gamestate";
import * as colors from "./colors";

export const TILE_SIZE: number = 20;
export const TILES_H: number = 24;
export const TILES_V: number = 24;

export class Renderer {
    private ctx: CanvasRenderingContext2D;
    constructor(private readonly gs: GameState, canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");

        this.initalize();
    }

    private initalize() {
        this.ctx.font = "30px Arial";
    }

    private drawTile(pos: Point, color: string) {
        this.ctx.beginPath();
        this.ctx.rect(
            pos.x * TILE_SIZE,
            pos.y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
        );
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    private drawBackground() {
        this.ctx.beginPath();
        this.ctx.rect(
            0,
            0,
            this.gs.width * TILE_SIZE,
            this.gs.height * TILE_SIZE
        );
        this.ctx.fillStyle = colors.BACKGROUND;
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.rect(0, 480, 480, 50);
        this.ctx.fillStyle = colors.WALL;
        this.ctx.fill();
        this.ctx.closePath();
    }

    private drawSnake() {
        this.drawTile(this.gs.snake.head, colors.SNAKE);

        for (let segment of this.gs.snake.segments) {
            this.drawTile(segment, colors.SNAKE);
        }
    }

    private drawFruit() {
        for (let fruit of this.gs.fruit) {
            this.drawTile(fruit, colors.FRUIT);
        }
    }

    private internal_render() {
        this.drawBackground();
        this.drawSnake();
        this.drawFruit();

        this.drawScore();
    }

    drawScore() {
        this.ctx.fillStyle = colors.FG;
        this.ctx.fillText(
            "Score: " + this.gs.score.toString(),
            0,
            TILES_V * TILE_SIZE + 35,
            TILES_H * TILE_SIZE
        );
    }

    public render() {
        requestAnimationFrame(() => {
            this.internal_render();
        });
    }
}
