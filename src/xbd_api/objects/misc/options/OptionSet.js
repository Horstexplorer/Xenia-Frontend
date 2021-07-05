import OptionDef from "@/xbd_api/objects/misc/options/OptionDef";
import Option from "@/xbd_api/objects/misc/options/Option";
import {isSet, isSetBigInt, set, setBigInt} from "@/utils/bitutils";


export const Selection = {
    NONE: -1,
    SINGLE: 0,
    MULTI: 1
}

export function getOptionsOf(optionDefs, raw){
    let options = {};
    for(const [name, optionDef] of Object.entries(optionDefs.definitions)){
        if(optionDefs.settings.type === Number){
            options[name] = new Option(optionDef, isSet(raw, optionDef.getId()))
        }else if(optionDefs.settings.type === BigInt){
            options[name] = new Option(optionDef, isSetBigInt(raw, optionDef.getId()))
        }
    }
    return {
        settings : optionDefs.settings,
        options: options
    }
}

export function getRawOf(options){
    if(options.settings.type === Number){
        let r = 0;
        // eslint-disable-next-line no-unused-vars
        for(const option of Object.values(options.options)){
            if(option.getValue()){
                r = set(r, option.getOptionDef().getId())
            }
        }
        return r;
    }else if (options.settings.type === BigInt()){
        let r = BigInt(0);
        // eslint-disable-next-line no-unused-vars
        for(const [name, option] of Object.entries(options.options)){
            if(option.getValue()){
                r = setBigInt(r, option.getOptionDef().getId())
            }
        }
        return r;
    }
}


// GUILD

export const GuildSettingOptionDefs = {
    settings: {
        type: Number,
        selectable: Selection.MULTI
    },
    definitions: {
        BOT_IGNORE_ADMIN_PERMS: new OptionDef(4, "Bot Ignore Admin Perms", ""),
        COMMAND_AUTO_CORRECT_MESSAGE: new OptionDef(3, "Command Auto-correct Notification", ""),
        COMMAND_AUTO_CORRECT: new OptionDef(2, "Command Auto-correct", ""),
        ENFORCE_LANGUAGE: new OptionDef(1, "Enforce Language", ""),
        //VPERM_ENABLE: new OptionDef(0, "Vperm Enable", "")
    }
}

export const GuildD43Z1ModeDefs = {
    settings: {
        type: Number,
        selectable: Selection.SINGLE
    },
    definitions: {
        SELF_LEARNING: new OptionDef(2, "Self_Learning_Only", ""),
        MIX: new OptionDef(1, "Mix", ""),
        MASTER: new OptionDef(0, "Master Only", "")
    }
}

// CHANNEL

export const ChannelAccessModeDefs = {
    settings: {
        type: Number,
        selectable: Selection.SINGLE
    },
    definitions: {
        DISABLED: new OptionDef(2, "Disabled", ""),
        INACTIVE: new OptionDef(1, "Inactive", ""),
        ACTIVE: new OptionDef(0, "Active", "")
    }
}

export const ChannelFlagsDefs = {
    settings: {
        type: Number,
        selectable: Selection.NONE
    },
    definitions: {
        NEWS: new OptionDef(1, "NEWS", "", false),
        NSFW: new OptionDef(0, "NSFW", "", false)
    }
}

export const ChannelSettingsDefs = {
    settings: {
        selectable: null
    },
    definitions: {}
}

export const ChannelD43Z1SettingsDefs = {
    settings: {
        type: Number,
        selectable: Selection.NONE
    },
    definitions: {
        ENABLE_SELF_LEARNING: new OptionDef(1, "Activate Self Learning", ""),
        ACTIVE: new OptionDef(0, "Active", "", false)
    }
}

// VPERM ROLE

export const VPROLEPermissionsDefs = {
    settings : {
        type: Number,
        selectable: Selection.MULTI
    },
    definitions : {}
}