export default class User {

    constructor(json){
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getUserId() {
        return BigInt(this.json.userId.toString());
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