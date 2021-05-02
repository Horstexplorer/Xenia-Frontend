import {
    rawHTTP_GET,
    rawHTTP_PUT,
    rawHTTP_POST,
    rawHTTP_DELETE,
} from "@/xbd_api/httpcore";
import Guild from "@/xbd_api/objects/Guild";
import User from "@/xbd_api/objects/User";
import Member from "@/xbd_api/objects/Member";
import License from "@/xbd_api/objects/License";
import Channel from "@/xbd_api/objects/Channel";
import Role from "@/xbd_api/objects/Role";
const LosslessJSON = require('lossless-json');

/*
    GET
 */

export function getGuild(guildId) {
    return rawHTTP_GET("data/guilds/"+guildId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Guild(LosslessJSON.parse(response.bodyText)))
            });
    }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
    })
}

export function getGuildLicense(guildId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/license").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new License(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildChannelIds(guildId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/channels").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(LosslessJSON.parse(response.bodyText))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildChannel(guildId, channelId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/channels/"+channelId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Channel(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildMemberIds(guildId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/members").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(LosslessJSON.parse(response.bodyText))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildMember(guildId, userId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/members/"+userId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Member(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildRoleIds(guildId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/roles").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(LosslessJSON.parse(response.bodyText))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getGuildRole(guildId, roleId) {
    return rawHTTP_GET("data/guilds/"+guildId+"/roles/"+roleId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function getUser(userId) {
    return rawHTTP_GET("data/users/"+userId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new User(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

/*
    UPDATE
 */

export function updateGuild(guild) {
    return rawHTTP_PUT("data/guilds/"+guild.getGuildId().toString(), guild.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Guild(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function updateGuildChannel(channel) {
    return rawHTTP_PUT("data/guilds/"+channel.getGuildId().toString()+"/channels/"+channel.getChannelId().toString(), channel.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Channel(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function updateGuildMember(member) {
    return rawHTTP_PUT("data/guilds/"+member.getGuildId().toString()+"/members/"+member.getUserId().toString(), member.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Member(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export function updateRole(role) {
    return rawHTTP_PUT("data/guilds/"+role.getGuildId().toString()+"/roles/"+role.getRoleId().toString(), role.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

/*
    CREATE
 */

export function createRole(guild) {
    return rawHTTP_POST("data/guilds/"+guild.getGuildId().toString()+"/roles/-1", {}).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(LosslessJSON.parse(response.bodyText)))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

/*
    DELETE
 */

export function deleteRole(role) {
    return rawHTTP_DELETE("data/guilds/"+role.getGuildId().toString()+"/roles/"+role.getRoleId().toString()).then(
        () => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(true)
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.status, "msg": error.statusText});
            }))
        })
}

export default {
    deleteRole,
    createRole,
    updateRole, updateGuildMember, updateGuildChannel, updateGuild,
    getUser, getGuildRole, getGuildRoleIds, getGuildMember, getGuildMemberIds, getGuildChannel, getGuildChannelIds, getGuildLicense, getGuild
}