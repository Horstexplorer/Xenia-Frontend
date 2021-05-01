import {getBigInt, getBigIntAsString} from "@/utils/jsonutils";

export default class User {

    constructor(json){
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getUserId() {
        return getBigInt(this.json, "userId");
    }

    getUserIdString() {
        return getBigIntAsString(this.json, "userId");
    }

    getCreationTimestamp() {
        return this.json.creationTimestamp;
    }

    getInternalRole() {
        return this.json.internalRole;
    }

    getPreferredLanguage() {
        return this.json.preferredLanguage;
    }

    getMetaUserName() {
        return this.json.meta.username;
    }

    getMetaIconURL() {
        return this.json.meta.iconUrl;
    }
}