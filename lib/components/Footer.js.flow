// @flow
import * as React from 'react';
import {validate} from '../tools/type_validations';

type Props = {
    definition?: string,
    children?: React.Node
}

const props_obj = {
    definition: "string"
}

const Footer =  (props:Props)=>{
    validate(props,props_obj,"Footer");
    var definition = (props.definition == undefined) ? "footer" : "footer "+ props.definition;
    return <footer className={definition}>
        {props.children}
    </footer>
}

export default Footer;