export default class License {

    constructor(json) {
        this.json = json;
    }

    getJSON() {
        return this.json;
    }

    getLicenseName() {
        return this.json.licenseName;
    }

    getLicenseDescription() {
        return this.json.licenseDescription;
    }

    getActivationTimestamp() {
        return this.json.activationTimestamp;
    }

    getDurationDays() {
        return this.json.durationDays;
    }



    getPerkChannelLogging() {
        return this.json.perks.channelLogging;
    }

    getPerkGuildRoles() {
        return this.json.perks.guildRoles;
    }

    getPerkMiscTags() {
        return this.json.perks.miscTags;
    }

    getPerkMiscNotifications() {
        return this.json.perks.miscNotifications;
    }

    getPerkMiscTwitchNotifications() {
        return this.json.perks.miscTwitchNotifications;
    }

    getPerkChannelD43z1SelfLearning() {
        return this.json.perks.channelD43z1SelfLearning;
    }
}