// @flow
import React from 'react';
import { validate } from '../tools/type_validations.js';
import Container from './Container';

type Props = {
    title?: string,
    subtitle?: string,
    definition?: string,
    container_definition?: string,
    title_definition?:string,
    subtitle_definition?:string
}

const props_obj = {
  title: "string",
  subtitle: "string",
  definition: "string"
}

const Hero = (props: Props)=>{
  validate(props, props_obj,"Hero");
  var definition =  (props.definition ==  undefined) ? "hero": "hero "+props.definition;

  return (
    <section className={definition}>
    <div className="hero-body">
      <Container definition={props.container_definition}>
        <h1 className="title">
         {props.title}
        </h1>
        <h2 className="subtitle">
          {props.subtitle}
        </h2>
      </Container>
    </div>
  </section>);
}

export default Hero;
