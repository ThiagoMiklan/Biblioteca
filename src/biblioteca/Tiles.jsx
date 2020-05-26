// @flow
import  * as React from 'react';
import getClassName from '../tools/getClassName';
import classnames from 'classnames';

type Props = {
    definition?: string,
    children?: React.Node
}

const Tile = (props: Props)=>{
    var tiles_definition =  classnames(getClassName("tile "+props.definition,"Tiles"));
    return <div className={tiles_definition}>
                {props.children}
            </div>
}

export default Tile;