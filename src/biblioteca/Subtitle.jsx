import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName'


const SubTitle = (props)=>{
    return assembleSubTitle(props)
};
     
function assembleSubTitle(props) {
    var code_title = "";
    if (props.definition != undefined && typeof props.definition == 'number') {
        var title =  getTitle(props);
        code_title = title;
    }
   
    return code_title;
}

function getTitle(props){
    var assemble_functions = mapFunctionsTitle();
    var title = "";
    var definition = props.definition;
    
    if(definition >= 1 && definition <= 6){
            var assemble: ()=> void = assemble_functions.get(definition);
            title = assemble(props);
    }
    
    return title;
}


// p ==  paragráfo, se a tag a ser utilizada é parágrafo ou tag de título
var assemble1 = (props) =>{
    var code = "";
    var definition = getDefinition(props);
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code = <h1 className={definition}>{props.children}</h1>; 
    }
    return code;
}

var assemble2 = (props)=>{
    var code = "";
    var definition = getDefinition(props);
   
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code= <h2 className={definition}>{props.children}</h2>; 
    }
    return code;
}

var assemble3 = (props) =>{
    var code= "";
    var definition = getDefinition(props);
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code = <h3 className={definition}>{props.children}</h3>; 
    }
    return code;
}

var  assemble4 = (props) =>{
    var code= "";
    var definition = getDefinition(props);
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code = <h4 className={definition}>{props.children}</h4>; 
    }
    return code;
}

var assemble5= (props)=>{
    var code = "";
    var definition = getDefinition(props);
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code = <h5 className={definition}>{props.children}</h5>; 
    }
    return code;
}

var assemble6 = (props) =>{
    var code = "";
    var definition = getDefinition(props);
    if(props.p == true){
        code = <p className={definition}>{props.children}</p>; 
    }else{
        code= <h6 className={definition}>{props.children}</h6>; 
    }
    return code;
}


function mapFunctionsTitle(){
    var map = new Map();
    map.set(1,assemble1);
    map.set(2,assemble2);
    map.set(3,assemble3);
    map.set(4,assemble4);
    map.set(5,assemble5);
    map.set(6,assemble6);
    return map;
}
function getDefinition(props){
    var definition = "";
    
    definition = classnames(getClassName("subtitle "+String(props.definition), "Title"));
    

    return definition;
}


SubTitle.propTypes ={
    // exceção: Definition como number se encaixa melhor ao presente componente
    definition: PropTypes.number.isRequired,
    // p é usado para determinar se um título é construído com tag <p> ou com as tags
    // h1,h2,h3,h4,h5 ou h6
    p: PropTypes.bool

}

export default SubTitle;