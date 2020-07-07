import React from 'react';

const Footer =  (props)=>{
   
    var definition = (props.definition == undefined) ? "footer" : "footer "+ props.definition;
   
   return <footer className={definition}>
        {props.children}
    </footer>
}

export default Footer;