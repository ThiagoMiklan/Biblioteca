// @flow
import * as React from 'react';

type Props = {
  definition?: string,
  children?: React.Node
 }

const Content = (props: Props) =>{
    var definition =  (props.definition == undefined) ? "content": "content "+ props.definition;
     return (
        <div class={definition}>
            {props.children}
        </div>
        );
    
}

export default Content;