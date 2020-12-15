import BackendPathArg from "../../base/backendpatharg"
import APIDataObject from "../../base/apidataobject";

export class AvailableGuilds extends APIDataObject {

    constructor() {
        super();
        this.availableGuilds = [];
        this.setBackendPath(new BackendPathArg("data"), new BackendPathArg("frontend"), new BackendPathArg("guildlist"));
    }

    get getAvailableGuilds(){
        return this.availableGuilds;
    }

    get asJSON(){
        return {
            guilds: this.availableGuilds
        };
    }

    set fromJSON(json){
        this.availableGuilds = json.guilds;
    }
}