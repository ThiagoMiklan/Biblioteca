import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from './Button.jsx';


class Notification extends React.Component{

    render(){
       
            var definition = "notification " + classnames(getClassName(this.props.definition,"Notification"));
            var value_ = this.props.value;
        return(
            <div className={definition}>
                {addButtonDelete(this.props)}
                {this.props.children}
            </div>
        );
    }
}
// consertar isso, button sem enviar onClickNão aceita
function onClick(){


}
function addButtonDelete(props){
    var button_del_code = "";
    if(props.delete == true){
        button_del_code = <Button definition="delete" onClick ={onClick}/>
    }

    return button_del_code;
}

Notification.propTypes = {
    definition: PropTypes.string,
    delete : PropTypes.bool
}

export default Notification;