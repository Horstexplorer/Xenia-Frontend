import BackendPathArg from "./base/backendpatharg"
import APIDataObject from "./base/apidataobject";

export default class Role extends APIDataObject {

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
        let long = BigInt(0);
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
            guildId: this.guildId,
            roleId: this.roleId,
            roleName: this.roleName,
            rolePermissions: this.rolePermissions
        };
    }

    set fromJSON(json){
        this.guildId = json.guildId;
        this.roleId = json.roleId;
        this.roleName = json.roleName;
        // BigInt should exist
        // eslint-disable-next-line no-undef
        this.rolePermissions = BigInt(json.rolePermissions);
    }
}