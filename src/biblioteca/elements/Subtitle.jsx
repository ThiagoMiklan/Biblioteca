import {React,useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName'
import {renderToString} from 'react-dom/server'


const Subtitle = (props)=>{
    
    return assembleTitle(props);
}

function assembleTitle(props){
     var map = mapFunctionsTitle();
     var definition =  "subtitle "+ classnames(getClassName(props.definition,"Title"));
     var title = map.get(props.definition)(definition,props.value);
     var code_title =  "";
     if(title != undefined){
        code_title =  title;
     }
    return code_title;
}

function mapFunctionsTitle(){
    var map = new Map();
    map.set("1",assembleH1);
    map.set("2",assembleH2);
    map.set("3",assembleH3);
    map.set("4",assembleH4);
    map.set("5",assembleH5);
    map.set("6",assembleH6);
    return map;
}

var assembleH1 = (definition,value) =>{
return (<h1 className={definition}>{value}</h1>);
}

var assembleH2 = (definition,value)=>{
    return (<h2  className={definition}>{value}</h2>);
}

var assembleH3 = (definition,value) =>{
    return (<h3  className={definition}>{value}</h3>);
}

var  assembleH4 = (definition,value) =>{
    return (<h4 className={definition}>{value}</h4>);
}

var assembleH5= (definition,value)=>{
    return (<h5 className={definition}>{value}</h5>);
}

var assembleH6 = (definition,value) =>{
    return (<h6  className={definition}>{value}</h6>);
}



export default Subtitle;