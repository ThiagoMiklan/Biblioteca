// @flow
import * as React from 'react';

type Props = {
    definition?: string,
    children?: React.Node
}

const Footer =  (props:Props)=>{
    var definition = (props.definition == undefined) ? "footer" : "footer "+ props.definition;
    
    return <footer className={definition}>
        {props.children}
    </footer>
}

export default Footer;