// @flow
import * as React from 'react'
import PropTypes from 'prop-types';

type Props ={
    definition?:string,
    children?: React.Node
}

const Control = (props:Props)=>{
    var definition = (props.definition ==  undefined || props.definition == '') ? "control icons-left": "control "+props.definition
    
    return(
        <div className={definition}>
              {
                    React.Children.map(props.children, (child, i) => {
                        return child
                    })
                }
        </div>
    );
}

Control.propTypes = {
    definition: PropTypes.string
}

export default Control;
