export default class OptionDef {

    constructor(id, name, description, modifiable = true) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.modifiable = modifiable;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    isModifiable() {
        return this.modifiable
    }

}