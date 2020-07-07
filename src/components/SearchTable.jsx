// @flow
import React from 'react';
import Table from './Table';
import ButtonList from './ButtonList';
import Button from './Button';
import Field from './Field'
import {validate} from '../tools/type_validations';

type Props ={
    onChange?: ()=>void,
    label?:string,
    control_definition?:string,
    placeholder?:string,
    icon_name?:string,
    icon_definition?:string,
    input_definition?:string,
    table_definition?:string,
    itens_header:Array<Object>,
    itens_body?:Array<Object>,
    header_definition?:string,
    itens_footer?: Array<Object>,
    button_definition?:string,
    onClick?: ()=> void ,
    value?: string,
    onClickRow?: ()=>void
}

const props_obj ={
    onChange: 'function',
    label:'string',
    control_definition:'string',
    placeholder:'string',
    icon_name:'string',
    icon_definition:'string',
    input_definition:'string',
    table_definition:'string',
    itens_header:'array',
    itens_body:'array',
    header_definition:'string',
    itens_footer: 'array',
    button_definition:'string',
    onClick: 'function',
    value: 'string',
    onClickRow: 'function'
}

const SearchTable = (props:Props)=>{

    validate(props,props_obj,"SearchTable");
    
       return  <div className="container">
            <Field onChange={props.onChange} 
                  label={props.label} 
                  control_definition={props.control_definition} 
                  placeholder={props.placeholder} 
                  icon_name={props.icon_name} 
                  icon_definition={props.icon_definition}
                  input_definition={props.input_definition}
                  />
            <br></br>
            <Table definition={props.table_definition} 
                   itens_header={props.itens_header}
                   itens_body={props.itens_body} 
                   header_definition={props.header_definition}
                   itens_footer={props.itens_footer}
                   onClickRow={props.onClickRow}/>
            <ButtonList>
                <Button definition={props.button_definition} onClick={props.onClick} label={props.value}/>
            </ButtonList>
        </div>
}

export default SearchTable;
    
  