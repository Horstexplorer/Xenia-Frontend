import BackendPathArg from "../../base/backendpatharg"
import APIDataObject from "../../base/apidataobject";

export class User extends APIDataObject {

    constructor(userid) {
        super();
        this.userId = userid;
        this.creationTimestamp = 0;
        this.internalRole = "";
        this.preferredLanguage = "";
        this.metaUsername = "";
        this.setBackendPath(new BackendPathArg("data"), new BackendPathArg("users"), new BackendPathArg(()=> this.getId))
    }

    get getId(){
        return this.userId;
    }

    get getCreationTimestamp(){
        return this.creationTimestamp;
    }

    get getInternalRole(){
        return this.internalRole;
    }

    get getPreferredLanguage(){
        return this.preferredLanguage;
    }

    get getMetaUsername(){
        return this.metaUsername;
    }

    get asJSON(){
        return {
            userId: this.userId,
            creationTimestamp: this.creationTimestamp,
            internalRole: this.internalRole,
            preferredLanguage: this.preferredLanguage,
            meta: {
                username: this.metaUsername
            }
        };
    }

    set fromJSON(json){
        this.userId = json.userId;
        this.creationTimestamp = json.creationTimestamp;
        this.internalRole = json.internalRole;
        this.preferredLanguage = json.preferredLanguage;
        this.metaUsername = json.meta.username;
    }

}