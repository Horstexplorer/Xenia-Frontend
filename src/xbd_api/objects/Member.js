export default class Member {

    constructor(json){
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getGuildId() {
        return BigInt(this.json.guildId.toString());
    }

    getUserId() {
        return BigInt(this.json.userId.toString());
    }

    getCreationTimestamp() {
        return this.json.creationTimestamp;
    }

    getRoleIds() {
        return new BigInt64Array(this.json.roles)
    }



    getMetaNickname() {
        return this.json.nickname;
    }

    isGuildAdmin() {
        return this.json.meta.isAdministrator;
    }

    isGuildOwner() {
        return this.json.meta.isOwner;
    }

}