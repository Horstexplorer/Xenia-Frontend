export function putBigIntAsLong(json, key, bigint){
    return putStringAsLong(json, key, bigint.toString());
}

export function putStringAsLong(json, key, string){
    delete json[key];
    let jsonString = JSON.stringify(json);
    jsonString = jsonString.substring(0, jsonString.length-1);
    jsonString +=((Object.keys(json).length > 0) ? ', ' : '' ) + "\"" + key + "\": " +string + "}";
    return JSON.parse(jsonString);
}

export function getBigIntAsString(json, key){
    return getBigInt(json, key).toString();
}

export function getBigInt(json, key){
    return BigInt(json[key]);
}