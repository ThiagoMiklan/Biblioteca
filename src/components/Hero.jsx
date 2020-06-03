// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations.js';

// v.1.0

type Props = {
    title?: string,
    subtitle?: string,
    definition?: string
}

const props_obj = {
  title: "string",
  subtitle: "string",
  definition: "string"
}

const Hero = (props: Props)=>{
  validate(props, props_obj);
  var definition =  (props.definition ==  undefined) ? "hero": "hero "+props.definition;
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
