
export function isSet(value, pos){
    return ((value >>> pos) & 1) === 1
}

export function isSetBigInt(value, pos){
    return ((value >>> BigInt(pos)) & BigInt(1)) === BigInt(1)
}

export function set(value, pos){
    value |= 1 << pos;
    return value;
}

export function unset(value, pos){
    value &= ~(1 << pos)
    return value;
}

export function setBigInt(value, pos){
    value |= BigInt(1) << BigInt(pos)
    return value;
}

export function unsetBigInt(value, pos){
    value &= ~(BigInt(1) << BigInt(pos))
    return value
}