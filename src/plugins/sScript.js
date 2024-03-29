import Plugin from "./plugin.js";
export default class SScript extends Plugin {
    constructor(content = "x", power = "2") {
        super();
        this.content = content;
        this.power = power;
    }
    width(state) {
        let a = state.chars_width(this.content);
        let b = state.chars_width(this.power, state.getFontSize() / 2);
        return Math.ceil(a + b);
    }
    draw(state, x, y) {
        state.drawText(this.content, x, y);
        let add_to_X = state.chars_width(this.content);
        state.ctx.font = "20px serif";
        state.drawText(this.power, x + add_to_X, y);
        return true;
    }
}
