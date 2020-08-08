// @flow
import  * as React from 'react';
import { validate } from '../tools/type_validations';

type Props = {
    definition?: string,
    children?: React.Node
}

const props_obj = {
    definition: "string"
}

const Tile = (props: Props)=>{
    validate(props,props_obj,"Tiles");
    var tiles_definition = (props.definition == undefined)? "tile": "tile "+props.definition;
    return <div className={tiles_definition}>
                {props.children}
            </div>
}

export default Tile;