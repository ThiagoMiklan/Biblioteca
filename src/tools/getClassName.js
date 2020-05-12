
import getComponentProps from '../props/ComponentPath'

const getClassName = function getClassNames(definition,component_name){
    if(definition !== undefined && typeof definition == 'string'){
        var classObj = {};
        var component_props = getComponentProps(component_name);
        var array_definition = definition.split(" ");
        var size = array_definition.length;
        for(let i = 0 ; i < size ;i++){
            let key =  (component_props[array_definition[i]]);
            let value = (component_props[array_definition[i]]);
            classObj[key] = value;
        }
    }
    return classObj;
}


export default getClassName