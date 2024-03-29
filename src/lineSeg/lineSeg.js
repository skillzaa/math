import ItemsFactory from "./itemsFactory.js";
export default class LineSeg {
    constructor(state) {
        this.items = []; // = [] is must not | []
        this.state = state;
        this.items = [];
        this.item_gap = 2;
        this.seg_height = 0;
        this.seg_width = 0;
        this.itemsFactory =
            new ItemsFactory(this.state, this.insert_new_item.bind(this));
    }
    //--depricated 24-jan-2022
    add_item() {
        return this.itemsFactory;
    }
    add() {
        return this.itemsFactory;
    }
    width() {
        return this.seg_width;
    }
    height() {
        return this.seg_height;
    }
    draw(x, y) {
        for (let i = 0; i < this.items.length; i++) {
            let tf = this.items[i].draw(x, y);
            //--there may be control segments which may not move the x in that case dont add gap
            if (this.items[i].width() > 0) {
                x += (this.items[i].width() + this.item_gap);
            }
        }
        return true;
    }
    insert_new_item(item) {
        this.seg_width += item.width();
        if (item.height() > this.seg_height) {
            this.seg_height = item.height();
        }
        this.items.push(item);
        return item;
    }
}
