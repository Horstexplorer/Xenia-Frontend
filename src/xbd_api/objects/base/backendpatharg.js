export default class BackendPathArg{
    constructor(object) {
        this.object = object;
    }
    get getValue(){
        if(this.object instanceof Function){
            return this.object(null);
        }
        return this.object;
    }
}