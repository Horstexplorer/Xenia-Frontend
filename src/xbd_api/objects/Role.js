export default class Role {

    constructor(json) {
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getGuildId() {
        return BigInt(this.json.guildId.toString());
    }

    getRoleId() {
        return BigInt(this.json.roleId.toString());
    }

    getRoleName() {
        return this.json.roleName;
    }

    setRoleName(value) {
        this.json.roleName = value;
    }

    getPermissionsRaw() {
        return BigInt(this.json.rolePermissions.toString());
    }

    setPermissionsRaw(value) {
        if(value instanceof BigInt){
            this.json.rolePermissions = value.toString();
        }else {
            this.json.rolePermissions = value;
        }
    }
}