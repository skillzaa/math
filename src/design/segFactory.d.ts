import State from "./state.js";
import LineSeg from "../lineSeg/lineSeg.js";
import Frac from "../frac/frac.js";
import IDrawable from "../design/IDrawable.js";
export default class SegFactory {
    private state;
    private add_new_seg_fn;
    constructor(state: State, add_new_seg_fn: (segment: IDrawable) => IDrawable);
    lineSeg(): LineSeg;
    frac(): Frac;
}
//# sourceMappingURL=segFactory.d.ts.map