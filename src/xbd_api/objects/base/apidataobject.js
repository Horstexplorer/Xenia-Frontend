import HTTPCore from "../../core/httpcore"
import "./backendpatharg"

export default class APIDataObject {

    constructor(){
        this.backendPath = [];
    }

    set setBackendPath(backendPathArgs){
        backendPathArgs.forEach( i =>
            this.backendPath.push(i)
        )
    }

    get getBackendPath() {
        let path = "";
        this.backendPath.forEach(i =>
            path += i.getValue() + "/"
        )
        return path;
    }

    getAsync(onSuccess, onFailure){
        HTTPCore.rawHTTP_GET(this.getBackendPath()).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    HTTPCore.AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    createAsync(onSuccess, onFailure){
        HTTPCore.rawHTTP_POST(this.getBackendPath(), this.asJSON).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    HTTPCore.AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    update(onSuccess, onFailure){
        HTTPCore.rawHTTP_PUT(this.getBackendPath(), this.asJSON).then(
            response => {
                this.fromJSON(response.body());
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    HTTPCore.AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    delete(onSuccess, onFailure){
        HTTPCore.rawHTTP_DELETE(this.getBackendPath()).then(
            response => {
                if(onSuccess != null) {
                    onSuccess(response);
                }
            }, response => {
                if(response.code === 401){
                    // token failure
                    HTTPCore.AUTH_TOKEN.set();
                }
                if(onFailure != null){
                    onFailure(response);
                }
            }
        )
    }

    // imp by extending object

    get asJSON(){
        return {};
    }

    set fromJSON(json){

    }
}