import State from "../framework/state.js";
import Plugin from "../plugin/plugin.js";

export default class Text extends Plugin {
content:string;
constructor (content:string){
    super();
this.content = content;    
}
width(state:State):number {
return state.chars_width(this.content);
// return 200;    
}
height(state:State):number {
return state.chars_width("Xi");    
}

draw(state:State,x :number,y :number):boolean{
state.drawText(this.content,x,y);    
return true;
}

}