


export default interface ITrigger {
    lookfor:string,
    callback(code:string,current_index:number):boolean
}