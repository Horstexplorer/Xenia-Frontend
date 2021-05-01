import {getBigInt, getBigIntAsString, putBigIntAsLong, putStringAsLong} from "@/utils/jsonutils";

export default class Channel {

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

    getChannelId() {
        return getBigInt(this.json, "channelId");
    }

    getChannelIdString() {
        return getBigIntAsString(this.json, "channelId");
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
        return getBigInt(this.json, "tmpLoggingChannelId");
    }

    getTmpLoggingChannelIdString() {
        return getBigIntAsString(this.json, "tmpLoggingChannelId");
    }

    setTmpLoggingChannel(value){
        putBigIntAsLong(this.json, "tmpLoggingChannelId", value)
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