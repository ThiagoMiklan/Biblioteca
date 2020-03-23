import React from 'react';
import getClassName from '../../tools/getClassName';
import classnames from 'classnames';


const Columns = (props)=>{
    var definition = classnames(getClassName("columns "+ props.definition,"Columns"));

    return <div className={definition}>
        {
            React.Children.map(props.children, (child, i)=>{
                return child;
            })
        }
    </div>

}

export default Columns