export default class Role {

    constructor(json) {
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getGuildId() {
        return BigInt(this.json.guildId);
    }

    getRoleId() {
        return BigInt(this.json.roleId);
    }

    getRoleName() {
        return this.json.roleName;
    }

    setRoleName(value) {
        this.json.roleName = value;
    }

    getPermissionsRaw() {
        return BigInt(this.json.rolePermissions);
    }

    setPermissionsRaw(value) {
        if(value instanceof BigInt){
            this.json.rolePermissions = value.toString();
        }else {
            this.json.rolePermissions = value;
        }
    }
}