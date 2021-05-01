import {rawHTTP_GET, rawHTTP_PUT, rawHTTP_POST, rawHTTP_DELETE} from "@/xbd_api/httpcore";
import Guild from "@/xbd_api/objects/Guild";
import User from "@/xbd_api/objects/User";
import Member from "@/xbd_api/objects/Member";
import License from "@/xbd_api/objects/License";
import Channel from "@/xbd_api/objects/Channel";
import Role from "@/xbd_api/objects/Role";

/*
    GET
 */

export function getGuild(guildId) {
    rawHTTP_GET("data/guilds/"+guildId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Guild(response.body))
            });
    }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
    })
}

export function getGuildLicense(guildId) {
    rawHTTP_GET("data/guilds/"+guildId+"/license").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new License(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildChannelIds(guildId) {
    rawHTTP_GET("data/guilds/"+guildId+"/channels").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(response.body)
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildChannel(guildId, channelId) {
    rawHTTP_GET("data/guilds/"+guildId+"/channels/"+channelId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Channel(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildMemberIds(guildId) {
    rawHTTP_GET("data/guilds/"+guildId+"/members").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(response.body)
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildMember(guildId, userId) {
    rawHTTP_GET("data/guilds/"+guildId+"/members/"+userId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Member(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildRoleIds(guildId) {
    rawHTTP_GET("data/guilds/"+guildId+"/roles").then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(response.body)
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getGuildRole(guildId, roleId) {
    rawHTTP_GET("data/guilds/"+guildId+"/roles/"+roleId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function getUser(userId) {
    rawHTTP_GET("data/users/"+userId).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new User(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

/*
    UPDATE
 */

export function updateGuild(guild) {
    rawHTTP_PUT("data/guilds/"+guild.getGuildIdString(), guild.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Guild(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function updateGuildChannel(channel) {
    rawHTTP_PUT("data/guilds/"+channel.getGuildIdString()+"/channels/"+channel.getChannelIdString(), channel.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Channel(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function updateGuildMember(member) {
    rawHTTP_PUT("data/guilds/"+member.getGuildIdString()+"/members/"+member.getUserIdString(), member.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Member(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

export function updateRole(role) {
    rawHTTP_PUT("data/guilds/"+role.getGuildIdString()+"/roles/"+role.getRoleId(), role.getJSON()).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

/*
    CREATE
 */

export function createRole(guild) {
    rawHTTP_POST("data/guilds/"+guild.getGuildIdString()+"/roles/-1", {}).then(
        (response) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(new Role(response.body))
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}

/*
    DELETE
 */

export function deleteRole(role) {
    rawHTTP_DELETE("data/guilds/"+role.getGuildIdString()+"/roles/"+role.getRoleId()).then(
        () => {
            // eslint-disable-next-line no-unused-vars
            return new Promise((successI, errorI) => {
                successI(true)
            });
        }, (error) => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI({"error": error.code});
            }))
        })
}