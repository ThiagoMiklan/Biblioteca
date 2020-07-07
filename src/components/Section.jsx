// @flow
import * as React from 'react';
import {validate} from '../tools/type_validations';

type Props ={
    children?: React.Node,
    definition?:string
}

const props_obj = {
    definition: 'string'
}

const Section = (props:Props)=>{
    validate(props,props_obj, "Section");
    var definition = (props.definition == undefined) ? "section" : "section "+ props.definition;
    return  <section className={definition}>
                { React.Children.map(props.children, (child, i) => {
                       return child;
                    })}
             </section>
}


export default Section;