import component_path from '../props/ComponentPath'

// Class que a partir de uma props e um nome de componente, devolve o className referente.

const getClassName = function getClassNames(definition,component_name){
    // consult component_path defined in ComponentPath and pass the component name, in order to return its properties defined in component
    if(definition != undefined){
        var classObj = new Object();
        var component_props = component_path[component_name];
        var definition  = definition;
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