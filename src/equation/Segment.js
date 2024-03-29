export default class Segment {
    constructor(state) {
        this.items = []; // = [] is must not | []
        this.state = state;
        this.items = [];
        this.item_gap = 2;
        this.seg_height = 0;
        this.seg_width = 0;
    }
    width() {
        return this.seg_width;
    }
    height() {
        return this.seg_height;
    }
    draw() {
        for (let i = 0; i < this.items.length; i++) {
            let tf = this.items[i].draw();
            //--there may be control segments which may not move the x in that case dont add gap
            if (this.items[i].width() > 0) {
                this.state.incX(this.items[i].width() + this.item_gap);
            }
        }
        return true;
    }
}
