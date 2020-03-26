import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';

const Section = (props)=>{
    return  <section className="section">
                { React.Children.map(props.children, (child, i) => {
                       return child;
                    })}
             </section>
}

Section.propTypes ={
    definition: PropTypes.string

}

export default Section;