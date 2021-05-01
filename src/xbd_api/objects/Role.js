import {putBigIntAsLong, getBigInt, getBigIntAsString} from "@/utils/jsonutils";

export default class Role {

    constructor(json) {
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

    getRoleId() {
        return getBigInt(this.json, "roleId");
    }

    getRoleIdString() {
        return getBigIntAsString(this.json, "roleId");
    }

    getRoleName() {
        return this.json.roleName;
    }

    setRoleName(value) {
        this.json.roleName = value;
    }

    getPermissionsRaw() {
        return getBigInt(this.json, "rolePermissions");
    }

    getPermissionsRawString() {
        return getBigIntAsString(this.json, "rolePermissions")
    }

    setPermissionsRaw(value) {
        putBigIntAsLong(this.json, "rolePermissions", value)
    }
}