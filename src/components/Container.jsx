// @flow
import  * as React from 'react';

type Props = {
    definition?: string,
    children?: React.Node
}

const Container = (props: Props) => {
    var definition = (props.definition == undefined) ? "container" : "container " + props.definition;
    return <div className={definition}>
        {props.children}
    </div>
}

export default Container;