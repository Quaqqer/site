import { TILE_SIZE, Renderer } from "./renderer";
import { GameState } from "./gamestate";

async function run() {
    const canvas = document.getElementById("snakeCanvas") as HTMLCanvasElement;
    const window = document.defaultView;

    let width = Math.floor(canvas.width / TILE_SIZE);
    let height = Math.floor(canvas.height / TILE_SIZE);

    let gs = new GameState(width, height);
    let renderer = new Renderer(gs, canvas);

    window.addEventListener(
        "keydown",
        (e) => {
            gs.updateInput(e);
        },
        false
    );

    while (true) {
        gs.update();
        renderer.render();

        await new Promise((r) => setTimeout(r, 200));
    }
}

run();
