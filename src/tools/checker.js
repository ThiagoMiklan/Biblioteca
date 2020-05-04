// @flow
import component_path from '../props/ComponentPath.js';
import {definition_err} from '../exception/messages.js'

export default function checkerDefinition(definition: any,component_name: string) {

    if(definition != undefined && definition != ""){
     var words = definition.split(/\s+/);
    var output = false;
    var props = component_path[component_name];
    var keys = Object.keys(props);
    var length = words.length;
    var words_err = [];

    for (let i = 0; i < length; i++) {
        var sentence = props[words[i]]
        var word = words[i];
        if(word != ""){
            if (sentence == undefined) {
            words_err.push(words[i]);                                                                                                  
            }
        }
    }
    
    if (words_err.length > 0) {
        var message_err = createMessage(words_err, definition_err, component_name);
        throw message_err;
    } else {
        output = true;
    }
    }
   


    return output

}

function createMessage(words_err, message,component_name) {

    var size = words_err.length;
    for (let i = 0; i < size; i++) {
        message += " " + words_err[i];
    }
    return message += " on component "+ component_name;
}



/*

function checker(definition: any){
   var words = definition.split(" ");
   var output =  false;
   var keys = Object.keys(button_props);
   var length = words.length;
   var words_err = [];
   
   for(let i = 0; i < length ; i++){
      var sentence =  button_props[words[i]]
      if(sentence == undefined){
          words_err.push(words[i]);
      };
   }

    var createMessage = (words_err)=>{
        var message = "The following characteristics are not defined:";
        var size = words_err.length;
        for(let  i = 0; i < size ; i++){
            message += " "+words_err[i];
        }
        return message;
    }

    if(words_err.length > 0){
    var message = createMessage(words_err);
    throw message;
    }else{
        output =  true;
    }
    

    return output

}

*/