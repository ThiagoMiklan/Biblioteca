import React from 'react';
import Table from './Table';
import ButtonList from './ButtonList';
import Button from './Button';
import Field from './Field'
import PropTypes from 'prop-types';

const SearchTable = (props)=>{

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
                <Button definition={props.button_definition} onClick={props.onClick}>{props.value}</Button>
            </ButtonList>
        </div>
}

SearchTable.propTypes ={
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.func,
    itens_header: PropTypes.array,
    itens_body: PropTypes.array,
    control_definition: PropTypes.string,
    table_definition: PropTypes.string,
    icon_name: PropTypes.string,
    icon_definition: PropTypes.string,
    header_definition: PropTypes.string,
    itens_footer: PropTypes.array,
    button_definition: PropTypes.string,
    // onclick de button
    onClick: PropTypes.func,
    // value de button
    value: PropTypes.string,
}

export default SearchTable;
    
  