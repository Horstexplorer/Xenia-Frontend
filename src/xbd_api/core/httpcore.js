import Vue from "vue";

export const BACKEND_URL = "https://backend.xenia.netbeacon.de/"
export const AUTH_TOKEN = {
    get get() {
        return localStorage.getItem("authToken");
    },
    set set(tokenValue) {
        if (tokenValue.isEmpty()) {
            localStorage.removeItem("authToken");
        } else {
            localStorage.setItem("authToken", tokenValue);
        }
    },
}

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