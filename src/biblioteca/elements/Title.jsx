import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName'
import {renderToString} from 'react-dom/server'


const Title = (props)=>{
    return assembleTitle(props)
};
     
function assembleTitle(props){
     var map = mapFunctionsTitle();
     var definition =  "title "+ classnames(getClassName(props.definition,"Title"));
     var title = map.get(props.definition)(definition,props.children,props.p);
     var code_title =  "";
     if(title != undefined){
        code_title =  title;
     }
    return code_title;
}

function mapFunctionsTitle(){
    var map = new Map();
    map.set("1",assemble1);
    map.set("2",assemble2);
    map.set("3",assemble3);
    map.set("4",assemble4);
    map.set("5",assemble5);
    map.set("6",assemble6);
    return map;
}

// p ==  paragráfo, se a tag a ser utilizada é parágrafo ou tag de título
var assemble1 = (definition,value,p) =>{
    var code = "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code = <h1 className={definition}>{value}</h1>; 
    }
    return code;
}

var assemble2 = (definition,value,p)=>{
    var code = "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code= <h2 className={definition}>{value}</h2>; 
    }
    return code;
}

var assemble3 = (definition,value,p) =>{
    var code= "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code = <h3 className={definition}>{value}</h3>; 
    }
    return code;
}

var  assemble4 = (definition,value,p) =>{
    var code= "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code = <h4 className={definition}>{value}</h4>; 
    }
    return code;
}

var assemble5= (definition,value,p)=>{
    var code = "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code = <h5 className={definition}>{value}</h5>; 
    }
    return code;
}

var assemble6 = (definition,value,p) =>{
    var code = "";
    if(p == true){
        code = <p className={definition}>{value}</p>; 
    }else{
        code= <h6 className={definition}>{value}</h6>; 
    }
    return code;
}


Title.propTypes ={
    value: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired
}

export default Title;