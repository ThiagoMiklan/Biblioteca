// @flow
import React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';
import checkerDefinition from '../tools/checker.js';

// v.1.0

type Props = {
    title?: string,
    subtitle?: string,
    definition?: string
}

const Hero = (props: Props)=>{
  checkerDefinition(props.definition,"Hero");
  var hero_definition =  (props.definition ==  undefined) ? "": props.definition;
  var definition =  classnames(getClassName("hero "+ hero_definition,"Hero"));
    return (
    <section className={definition}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
         {props.title}
        </h1>
        <h2 className="subtitle">
          {props.subtitle}
        </h2>
      </div>
    </div>
  </section>);
}

Hero.propTypes ={
    // Título do Banner
    title: PropTypes.string,
    // Subtítulo do Banner
    subtitle: PropTypes.string,
    // Características do Bulma
    definition: PropTypes.string
}

export default Hero;
