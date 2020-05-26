// @flow
import  * as React from 'react';

type Props = {
    definition?: string,
    children?: React.Node
}

const Tile = (props: Props)=>{
    var tiles_definition = (props.definition == undefined)? "tile": "tile "+props.definition;
    return <div className={tiles_definition}>
                {props.children}
            </div>
}

export default Tile;