
const functions = new Map();
functions.set("string", isString);
functions.set("boolean", isBool);
functions.set("object", isObject);
functions.set("number", isNumber);
functions.set("array", isArray);
functions.set("function", isFunc);

export function isString(props){
    if(props != undefined){
        if(typeof props != 'string'){
              throw "Expect string but received "+typeof props;
        }
    }
  
}

export function isBool(props){
    if(props != undefined){
        if(typeof props != 'boolean'){
             throw "Expect boolean but received "+typeof props;
        }
    }
}
export function isObject(props){
    if(props != undefined){
        if(typeof props != 'object'){
             throw "Expect object but received "+typeof props;
        }
    }
}

export function isNumber(props){
    if(props != undefined){
        if(typeof props != 'number'){
              throw "Expect number but received "+typeof props;
        }
    }
}

export function isArray(props){
 if(props != undefined){
        if(!Array.isArray(props)){
              throw "Expect array but received "+typeof props;
        }
    }
}   

export function isFunc(props){
    if(props != undefined){
        if(typeof props != 'function'){
            throw "Expect function but received "+typeof props;
        }
    }
}

export function validate(props, props_obj){
    if(props != undefined && props_obj != undefined){
         var keys =   Object.keys(props_obj);
         var values  = Object.values(props_obj);
         var size = values.length;

         for(let  i= 0 ; i < size; i++){
            var value = values[i];
            var key = keys[i];
            var funcao = functions.get(value);
            if(props[key] != undefined){
                 funcao(props[key]);
            }
         }
    }
  
}