// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type Props ={
    children?: React.Node
}

const Section = (props:Props)=>{
    return  <section className="section">
                { React.Children.map(props.children, (child, i) => {
                       return child;
                    })}
             </section>
}


export default Section;