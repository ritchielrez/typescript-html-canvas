import { EntShape, Entities } from "./entity.js"

export class Bricks {
    entities: Entities;

    readonly rowCount: number;
    readonly columnCount: number;
    readonly padding: number;
    readonly offsetTop: number;
    readonly offsetLeft: number;

    constructor(width: number, height: number, padding: number, rowCount: number, columnCount: number, offsetTop: number, offsetLeft: number) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.padding = padding;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
        this.entities = {
            x: new Float64Array(this.rowCount * this.columnCount),
            y: new Float64Array(this.rowCount * this.columnCount),
            speedX: new Float64Array([0]),
            speedY: new Float64Array([0]),
            width: width,
            height: height,
            status: [true],
            entShape: EntShape.Rectangle,
        }

        for (let c = 0; c < this.columnCount; ++c) {
            for (let r = 0; r < this.rowCount; ++r) {
                const idx = this.rowCount * c + r;
                // Update the x and y values
                this.entities.x[idx] = c * (this.entities.width + this.padding) + this.offsetLeft;
                this.entities.y[idx] = r * (this.entities.height + this.padding) + this.offsetTop;
                this.entities.status[idx] = true;
            }
        }
    }
}