import Vue from "vue";

// API BASE OBJECTS BELOW //

class BackendPathArg{
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

class APIDataObject {

    constructor(){
        this.backendPath = [];
    }

    set setBackendPath(backendPathArgs){
        backendPathArgs.forEach( i =>
            this.backendPath.push(i)
        )
    }

    get getBackendPath() {
        let path = "";
        this.backendPath.forEach(i =>
            path += i.getValue() + "/"
        )
        return path;
    }

    getAsync(onSuccess, onFailure){
        rawHTTP_GET(this.getBackendPath()).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    createAsync(onSuccess, onFailure){
        rawHTTP_POST(this.getBackendPath(), this.asJSON).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    update(onSuccess, onFailure){
        rawHTTP_PUT(this.getBackendPath(), this.asJSON).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    delete(onSuccess, onFailure){
        rawHTTP_DELETE(this.getBackendPath()).then(
            response => {
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    // imp by extending object

    get asJSON(){
        return {};
    }

    set fromJSON(json){

    }
}

class User extends APIDataObject {

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
            "userId": this.userId,
            "creationTimestamp": this.creationTimestamp,
            "internalRole": this.internalRole,
            "preferredLanguage": this.preferredLanguage,
            "meta": {
                "username": this.metaUsername
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

class Guild extends APIDataObject {
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
            "guildId" : this.guildId,
            "creationTimestamp": this.creationTimestamp,
            "preferredLanguage": this.preferredLanguage,
            "useVPerms": this.usesVPerms,
            "meta": {
                "name": this.metaGuildName,
                "iconUrl": this.metaIconUrl
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

class Role extends APIDataObject {

    constructor(guildId, roleId) {
        super();
        this.guildId = guildId;
        this.roleId = roleId;
        this.roleName = "";
        this.rolePermissions = 0;
        this.setBackendPath(new BackendPathArg("data"), new BackendPathArg("guilds"), new BackendPathArg(()=>this.getGuildId()), new BackendPathArg("roles"), new BackendPathArg(()=>this.getId()));
    }

    get getId(){
        return this.roleId;
    }

    get getGuildId(){
        return this.guildId;
    }

    get getRoleName(){
        return this.roleName;
    }

    set setRoleName(name){
        this.roleName = name;
    }

    get getRolePermissions(){
        return this.rolePermissions;
    }

    get getRolePermissionBits(){
        return this.calculateBits(this.setRolePermissions);
    }

    set setRolePermissions(bits){
        this.rolePermissions = this.calculatePermValue(bits);
    }

    calculatePermValue(bits){
        // BigInt should exist
        // eslint-disable-next-line no-undef
        var long = BigInt(0);
        bits.forEach(b =>
            long &= (1<<b)
        )
        return long;
    }

    calculateBits(permValue){
        let bits = [];
        for(var bPos = 0; bPos < 64; bPos++){
            if( ((permValue >> bPos) & 1 ) === 1){
                bits.push(bPos);
            }
        }
        return bits;
    }

    get asJSON(){
        return {
            "guildId": this.guildId,
            "roleId": this.roleId,
            "roleName": this.roleName,
            "rolePermissions": this.rolePermissions
        };
    }

    set fromJSON(json){
        this.guildId = json.guildId;
        this.roleId = json.roleId;
        this.roleName = json.roleName;
        // BigInt should exist
        // eslint-disable-next-line no-undef
        this.rolePermissions = new BigInt(json.rolePermissions);
    }
}

class Member extends APIDataObject {

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
          "guildId": this.guildId,
          "userId": this.userId,
          "creationTimestamp": this.creationTimestamp,
          "roles": this.roleIds,
          "meta" : {
              "nickname" : this.metaNickname,
              "isOwner" : this.metaIsOwner,
              "isAdministrator": this.metaIsAdministrator
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



// INTERNAL BELOW //

const BACKEND_URL = "https://backend.xenia.netbeacon.de/"
const AUTH_TOKEN = {
    get get() {
        return localStorage.getItem("authToken");
    },
    set set(tokenValue) {
        if (tokenValue.isEmpty()) {
            localStorage.removeItem("authToken");
        } else {
            localStorage.setItem("authToken", tokenValue);
        }
    },
}

function rawHTTP_GET(path, options = getOptions()){
    return Vue.http.get(getFullRequestURL(path), options);
}

function rawHTTP_PUT(path, body, options = getOptions()){
    return Vue.http.put(getFullRequestURL(path), body, options);
}

function rawHTTP_POST(path, body, options = getOptions()){
    return Vue.http.post(getFullRequestURL(path), body, options);
}

function rawHTTP_DELETE(path, options = getOptions()){
    return Vue.http.delete(getFullRequestURL(path), options);
}


function getFullRequestURL(path){
    return BACKEND_URL + path;
}

function getOptions() {
    return {
        headers: {
            Authorization: "Discord "+AUTH_TOKEN.get,
        },
    };
}

export default class XBDAPI {

}