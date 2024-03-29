import Item from "./item.js";
import State from "../design/state.js";
export default class Power extends Item {
    private power;
    constructor(state: State, content?: string, power?: string);
    width(): number;
    draw(x: number, y: number): boolean;
}
//# sourceMappingURL=power.d.ts.map