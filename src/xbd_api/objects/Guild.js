import {getBigInt, getBigIntAsString} from "@/utils/jsonutils";

export default class Guild {

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

    getCreationTimestamp() {
        return this.json.creationTimestamp;
    }

    getPreferredLanguage() {
        return this.json.preferredLanguage;
    }

    getPrefix() {
        return this.json.prefix;
    }

    setPrefix(value) {
        this.json.prefix = value;
    }

    getSettingsRaw() {
        return this.json.settings;
    }

    setSettingsRaw(raw) {
        this.json.settings = raw;
    }

    getD43Z1ModeRaw() {
        return this.json.d43z1Mode;
    }

    setD43Z1ModeRaw(raw){
        this.json.d43z1Mode = raw;
    }



    getMetaName() {
        return this.json.meta.name;
    }

    getMetaIconURL() {
        return this.json.meta.iconUrl;
    }

}