
const functions = new Map();
functions.set("string", isString);
functions.set("boolean", isBool);
functions.set("object", isObject);
functions.set("number", isNumber);
functions.set("array", isArray);
functions.set("function", isFunc);

class TypePropsError extends TypeError {
    constructor(message) {
        super(message); // (1)
        this.name = "Definition Error"; // (2)
    }
}

export function isString(props, key,name) {
    var output =  true;
    if (props != undefined) {
        if (typeof props !== 'string') {
           throw new TypePropsError("Expect string but received " + typeof props + " on prop " + key + " of component "+name)
        }
    }

    return output;

}

export function isBool(props, key,name) {
    if (props != undefined) {
        if (typeof props !== 'boolean') {
            throw new TypePropsError("Expect boolean but received " + typeof props + " on prop " + key + " of component "+name);
        }
    }
}
export function isObject(props, key,name) {
    if (props != undefined) {
        if (typeof props != 'object') {
            throw new TypePropsError("Expect object but received " + typeof props + " on prop " + key + " of component "+name);
        }
    }
}

export function isNumber(props, key,name) {
    if (props != undefined) {
        if (typeof props != 'number') {
            throw new TypePropsError("Expect number but received " + typeof props + " on prop " + key + " of component "+name);
        }
    }
}

export function isArray(props, key,name) {
    if (props != undefined) {
        if (!Array.isArray(props)) {
            throw new TypePropsError("Expect array but received " + typeof props + " on prop " + key + " of component "+name);
        }
    }
}

export function isFunc(props, key,name) {
    if (props != undefined) {
        if (typeof props != 'function') {
            throw new TypePropsError("Expect function but received " + typeof props + " on prop " + key + " of component "+name);
        }
    }
}

export function validate(props, props_obj,name) {

    if (props != undefined && props_obj != undefined) {
        const keys = Object.keys(props_obj);
        const values = Object.values(props_obj);
        const size = values.length;

        for (let i = 0; i < size; i++) {
            let value = values[i];
            let key = keys[i];
            let funcao = functions.get(value);
            if (props[key] != undefined) {
                funcao(props[key], key,name);
            }
        }
    }
    return false;

}