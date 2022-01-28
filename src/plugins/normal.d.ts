import State from "../framework/state.js";
import Plugin from "./plugin.js";
export default class Normal extends Plugin {
    content: string;
    constructor(content: string);
    width(state: State): number;
    height(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=normal.d.ts.map