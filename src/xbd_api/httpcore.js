import Vue from "vue";

/// STATICS
const DEFAULT_SCOPES = ["identify"]
const BACKEND_URL = "https://backend.xenia.netbeacon.de"

const AUTH_TOKEN = {
    get isSet(){
        return !(localStorage.getItem("authToken") === undefined);
    },
    get get() {
        return localStorage.getItem("authToken");
    },
    set set(tokenValue) {
        if (tokenValue === null || tokenValue === undefined) {
            localStorage.removeItem("authToken");
        } else {
            localStorage.setItem("authToken", tokenValue);
        }
    },
}

// AUTH //

export function login(discordToken, state, onSuc = null, onFail = null){
    let query = "?code="+discordToken+"&state="+state;
    DEFAULT_SCOPES.forEach( scope =>
        query += "&scope="+scope
    )
    rawHTTP_GET("/auth/discord"+query).then(
        response => {
            if(response.body.authToken !== undefined){
                AUTH_TOKEN.set = response.body.authToken;
                if(onSuc !== null){
                    onSuc();
                }
            }else{
                AUTH_TOKEN.set = null;
                if(onFail !== null){
                    onFail();
                }
            }
        },
        () => {
            AUTH_TOKEN.set = null;
            if(onFail !== null){
                onFail();
            }
        }
    );
}

export function renew(onSuc = null, onFail = null){
    rawHTTP_GET("auth/discord/renew").then(
        () => {
            if(onSuc !== null){
                onSuc();
            }
        },
        () => {
            AUTH_TOKEN.set = null;
            if(onFail !== null){
                onFail();
            }
        }
    );
}

export function logout(onSuc = null){
    rawHTTP_GET("auth/discord/revoke").then(
        () => {
            AUTH_TOKEN.set = null;
            if(onSuc !== null){
                onSuc();
            }
        },
        () => {
            AUTH_TOKEN.set = null;
            if(onSuc !== null){
                onSuc();
            }
        }
    );
}

// HTTP //

export function rawHTTP_GET(path, options = getOptions()){
    return Vue.http.get(getFullRequestURL(path), options).then(
        resolve => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                resolveI(resolve);
            }))
        },
        reject => {
            if(reject.code === 401){
                AUTH_TOKEN.set(null);
            }
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI(reject);
            }))
        }
    );
}

export function rawHTTP_PUT(path, body, options = getOptions()){
    return Vue.http.put(getFullRequestURL(path), body, options).then(
        resolve => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                resolveI(resolve);
            }))
        },
        reject => {
            if(reject.code === 401){
                AUTH_TOKEN.set(null);
            }
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI(reject);
            }))
        }
    );
}

export function rawHTTP_POST(path, body, options = getOptions()){
    return Vue.http.post(getFullRequestURL(path), body, options).then(
        resolve => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                resolveI(resolve);
            }))
        },
        reject => {
            if(reject.code === 401){
                AUTH_TOKEN.set(null);
            }
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI(reject);
            }))
        }
    );
}

export function rawHTTP_DELETE(path, options = getOptions()){
    return Vue.http.delete(getFullRequestURL(path), options).then(
        resolve => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                resolveI(resolve);
            }))
        },
        reject => {
            if(reject.code === 401){
                AUTH_TOKEN.set(null);
            }
            // eslint-disable-next-line no-unused-vars
            return new Promise(((resolveI, rejectI) => {
                rejectI(reject);
            }))
        }
    );
}


function getFullRequestURL(path){
    return BACKEND_URL + path;
}

function getOptions() {
    return {
        headers: {
            Authorization: "Bearer "+AUTH_TOKEN.get,
        },
    };
}

export default {
    AUTH_TOKEN,
    login, renew, logout,
    rawHTTP_GET, rawHTTP_PUT, rawHTTP_POST, rawHTTP_DELETE
}