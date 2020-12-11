import BackendPathArg from "./base/backendpatharg"
import APIDataObject from "./base/apidataobject";

export default class Guild extends APIDataObject {
    constructor(guildId) {
        super();
        this.guildId = guildId;
        this.creationTimestamp = 0;
        this.preferredLanguage = "";
        this.usesVPerms = false;
        this.metaGuildName = "";
        this.metaIconUrl = null;
        this.setBackendPath(new BackendPathArg("data"), new BackendPathArg("guilds"), new BackendPathArg(()=>this.getGuildId()));
    }

    get getGuildId(){
        return this.guildId;
    }

    get getCreationTimestamp(){
        return this.creationTimestamp;
    }

    get getPreferredLanguage(){
        return this.preferredLanguage;
    }

    setPreferredLanguage(language, onSuccess = null, onFailure = null){
        this.preferredLanguage = language;
        this.update(onSuccess, onFailure);
    }

    get useVPerms(){
        return this.usesVPerms;
    }

    setVPermsEnabled(value, onSuccess = null, onFailure = null){
        this.usesVPerms = value;
        this.update(onSuccess, onFailure);
    }

    get getMetaGuildName(){
        return this.metaGuildName;
    }

    get getMetaIconUrl(){
        return this.metaIconUrl;
    }


    get asJSON(){
        return {
            guildId : this.guildId,
            creationTimestamp: this.creationTimestamp,
            preferredLanguage: this.preferredLanguage,
            useVPerms: this.usesVPerms,
            meta: {
                name: this.metaGuildName,
                iconUrl: this.metaIconUrl
            }
        };
    }

    set fromJSON(json){
        this.guildId = json.guildId;
        this.creationTimestamp = json.creationTimestamp;
        this.preferredLanguage = json.preferredLanguage;
        this.usesVPerms = json.useVPerms;
        this.metaGuildName = json.meta.name;
        this.metaIconUrl = json.meta.iconUrl;
    }
}