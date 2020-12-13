import Vue from "vue";

/// STATICS
const DEFAULT_SCOPES = ["identify"]
const BACKEND_URL = "https://backend.xenia.netbeacon.de/"
export const AUTH_TOKEN = {
    get get() {
        return localStorage.getItem("authToken");
    },
    set set(tokenValue) {
        if (tokenValue === null || tokenValue === undefined || tokenValue.isEmpty()) {
            localStorage.removeItem("authToken");
        } else {
            localStorage.setItem("authToken", tokenValue);
        }
    },
}

// AUTH //

export function login(discordToken, state, onSuc, onFail){
    let query = "?code="+discordToken+"&state="+state;
    DEFAULT_SCOPES.forEach( scope =>
        query += "&scope="+scope
    )
    rawHTTP_GET("auth/discord"+query).then(
        response => {
            if(response.body.authToken !== undefined){
                AUTH_TOKEN.set = response.body.authToken;
                onSuc();
            }else{
                AUTH_TOKEN.set = null;
                onFail();
            }
        },
        () => {
            AUTH_TOKEN.set = null;
            onFail();
        }
    );
}

export function renew(){

}

export function logout(){

}

// HTTP //

export function rawHTTP_GET(path, options = getOptions()){
    return Vue.http.get(getFullRequestURL(path), options);
}

export function rawHTTP_PUT(path, body, options = getOptions()){
    return Vue.http.put(getFullRequestURL(path), body, options);
}

export function rawHTTP_POST(path, body, options = getOptions()){
    return Vue.http.post(getFullRequestURL(path), body, options);
}

export function rawHTTP_DELETE(path, options = getOptions()){
    return Vue.http.delete(getFullRequestURL(path), options);
}


function getFullRequestURL(path){
    return BACKEND_URL + path;
}

function getOptions() {
    return {
        headers: {
            Authorization: "Discord "+AUTH_TOKEN.get,
        },
    };
}