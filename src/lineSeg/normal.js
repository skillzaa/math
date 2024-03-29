import Item from "./item.js";
export default class Normal extends Item {
    constructor(state, content = "") {
        super(state);
        this.content = content;
    }
    width() {
        return this.state.chars_width(this.content);
    }
    height() {
        return this.state.chars_width("Xi");
    }
    draw(x, y) {
        this.state.drawText(this.content, x, y);
        return true;
    }
}
