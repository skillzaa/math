import Plugin from "./plugin.js";
export default class Normal extends Plugin {
    constructor(content) {
        super();
        this.content = content;
    }
    width(state) {
        return state.chars_width(this.content);
        // return 200;    
    }
    height(state) {
        return state.chars_width("Xi");
    }
    draw(state, x, y) {
        state.drawText(this.content, x, y);
        return true;
    }
}
