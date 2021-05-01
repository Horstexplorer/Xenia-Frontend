export default class OptionDef {

    constructor(option, value = false) {
        this.option = option;
        this.value = value
    }

    getOptionDef() {
        return this.option;
    }

    setValue(value) {
        if(!this.option.isModifiable()){
            return;
        }
        this.value = value;
    }

    getValue() {
        return this.value;
    }

}