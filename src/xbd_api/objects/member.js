import BackendPathArg from "./base/backendpatharg"
import APIDataObject from "./base/apidataobject";

export default class Member extends APIDataObject {

    constructor(guildId, userId) {
        super();
        this.guildId = guildId;
        this.userId = userId;
        this.creationTimestamp = 0;
        this.roleIds = [];
        this.metaNickname = "";
        this.metaIsOwner = false;
        this.metaIsAdministrator = false;
        this.setBackendPath(new BackendPathArg("data"), new BackendPathArg("guilds"), new BackendPathArg(()=>this.getGuildId()), new BackendPathArg("members"), new BackendPathArg(()=>this.getId()))
    }

    get getId(){
        return this.userId;
    }

    get getGuildId(){
        return this.guildId;
    }

    get getRoleIds(){
        return this.roleIds;
    }

    setRoles(roles, onSuccess = null, onFailure = null){
        this.roleIds = [];
        roles.forEach(r =>
            this.getRoleIds.push(r.getId())
        )
        this.update(onSuccess, onFailure);
    }

    get getMetaNickname(){
        return this.metaNickname;
    }

    get isOwner(){
        return this.metaIsOwner;
    }

    get isAdministrator(){
        return this.metaIsAdministrator;
    }

    get asJSON(){
        return {
            guildId: this.guildId,
            userId: this.userId,
            creationTimestamp: this.creationTimestamp,
            roles: this.roleIds,
            meta : {
                nickname : this.metaNickname,
                isOwner : this.metaIsOwner,
                isAdministrator: this.metaIsAdministrator
            }
        };
    }

    set fromJSON(json){
        this.guildId = json.guildId;
        this.userId = json.userId;
        this.creationTimestamp = json.creationTimestamp;
        this.roleIds = json.roles;
        this.metaNickname = json.meta.nickname;
        this.metaIsOwner = json.meta.isOwner;
        this.metaIsAdministrator = json.meta.isAdministrator;
    }
}