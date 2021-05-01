export default class Channel {

    constructor(json){
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getGuildId() {
        return BigInt(this.json.guildId);
    }

    getChannelId() {
        return BigInt(this.json.channelId);
    }

    getCreationTimestamp() {
        return this.json.creationTimestamp;
    }

    getAccessModeRaw() {
        return this.json.accessMode;
    }

    setAccessModeRaw(raw) {
        this.json.accessMode = raw;
    }

    getChannelFlagsRaw() {
        return this.json.channelFlags;
    }

    getChannelSettingsRaw() {
        return this.json.channelSettings;
    }

    setChannelSettingsRaw(raw){
        this.json.channelSettings = raw
    }

    getTmpLoggingActive() {
        return this.json.tmpLoggingActive;
    }

    setTmpLoggingActive(value) {
        this.json.tmpLoggingActive = value;
    }

    getTmpLoggingChannelId() {
        return BigInt(this.json.tmpLoggingChannelId);
    }

    setTmpLoggingChannel(value){
        if(value instanceof BigInt){
            this.json.tmpLoggingChannelId = value.toString();
        }else {
            this.json.tmpLoggingChannelId = value;
        }
    }

    getD43Z1SettingsRaw() {
        return this.json.d43z1Settings;
    }

    setD43Z1SettingsRaw(raw) {
        this.json.d43z1Settings = raw;
    }



    getMetaName() {
        return this.json.meta.name;
    }

    getMetaTopic() {
        return this.json.meta.topic;
    }
}