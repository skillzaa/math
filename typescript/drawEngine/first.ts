import DrawEngine from "./drawEngine.js";
import textInstr from "./textInstr.js";
import DrawInstr from "./drawInstr.js";
import {Actions} from "./actions.js";

let de = new DrawEngine();
de.instr.push(textInstr("a",35));
let pwr = textInstr("2",35)
pwr.fontSize = 50;
de.instr.push(pwr);
de.instr.push(textInstr("+",35));
de.instr.push(textInstr("b",35));
let b2 = textInstr("2",35)
b2.fontSize = 50;
de.instr.push(b2);
de.instr.push(textInstr("c",35));
let sp = new DrawInstr();
sp.action = Actions.DrawSpecialChar;
de.instr.push(sp);
de.instr.push(textInstr("d",35));
de.draw();
