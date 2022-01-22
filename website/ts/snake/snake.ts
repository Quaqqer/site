import { TILE_SIZE, Renderer } from "./renderer";
import { GameState } from "./gamestate";

async function run() {
    const canvas = document.getElementById("snakeCanvas") as HTMLCanvasElement;
    const window = document.defaultView;

    let width = Math.floor(canvas.width / TILE_SIZE);
    let height = Math.floor(canvas.height / TILE_SIZE);

    let gs = new GameState(width, height);
    let renderer = new Renderer(gs, canvas);

    let timeout: number | null = null;
    let handler: Function | null = null;

    window.addEventListener(
        "keydown",
        (e) => {
            gs.updateInput(e);

            // End timeout early
            if (handler != null) {
                clearTimeout(timeout);
                handler();
            }
        },
        false
    );

    while (true) {
        gs.update();
        renderer.render();

        await new Promise((r) => {
            handler = r;
            timeout = setTimeout(r, 200);
            return timeout;
        });
    }
}

run();
