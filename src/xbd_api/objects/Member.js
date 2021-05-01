import {getBigInt, getBigIntAsString, putBigIntAsLong} from "@/utils/jsonutils";

export default class Member {

    constructor(json){
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getGuildId() {
        return getBigInt(this.json, "guildId");
    }

    getGuildIdString() {
        return getBigIntAsString(this.json, "guildId");
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

    getRoleIds() {
        return BigInt64Array(this.json.roles)
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