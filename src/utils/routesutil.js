const DEV_PROTO = "http"
const PROD_PROTO = "https"

const PROD_BASE_FRONTEND = "xenia.netbeacon.de"
const DEV_BASE_FRONTEND = "localhost"

const PROD_BASE_BACKEND = "backend.xenia.netbeacon.de"
const DEV_BASE_BACKEND = "localhost:81"

export const DEV_MODE = window.location.href.startsWith("http://127.0.0.1/") ||  window.location.href.startsWith("http://localhost/");

export const BASE_FRONTEND = DEV_MODE ? DEV_BASE_FRONTEND : PROD_BASE_FRONTEND;
export const BASE_BACKEND = DEV_MODE ? DEV_BASE_BACKEND : PROD_BASE_BACKEND;

export const FRONTEND_URL = (DEV_MODE ? DEV_PROTO : PROD_PROTO) + "://"+BASE_FRONTEND+"/"
export const BACKEND_URL = (DEV_MODE ? DEV_PROTO : PROD_PROTO) + "://"+BASE_BACKEND+"/"

if(DEV_MODE){
    console.log(
        "----------------------------------------------------------------------"+"\n"+
        "               /!\\ Website running locally ? /!\\"+"\n"+
        "----------------------------------------------------------------------"+"\n"+
        "Make sure this site is running at "+FRONTEND_URL+"\n"+
        "Expecting backend at "+BACKEND_URL+"\n"+
        "----------------------------------------------------------------------"+"\n"
    )
}
