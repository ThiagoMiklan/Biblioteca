import React from 'react';

const Container = (props) => {
    var definition = (props.definition == undefined) ? "container" : "container " + props.definition;
    return <div className={definition}>
        {props.children}
    </div>
}

export default Container;