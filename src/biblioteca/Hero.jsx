// @flow
import React from 'react';
import PropTypes from 'prop-types';


// v.1.0

type Props = {
    title?: string,
    subtitle?: string,
    definition?: string
}

const Hero = (props: Props)=>{
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
