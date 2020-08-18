// @flow
import * as React from 'react';
import { validate } from '../tools/type_validations.js';

type Props = {
  definition?: string,
  children?: React.Node,
  head_definition?: string,
  body_definition?:string,
  foot_definition?:string
}

const props_obj = {
  definition: 'string'
}

const HeroThreeParts = (props: Props) => {
  validate(props, props_obj,"HeroThreeParts");
  var childrens = React.Children.map(props.children, (child, i) => { return child });
  return assemble(childrens, props);
}

function assemble(childrens,props){
  let code = assembleThreePartsHero(props, childrens);
  return code;
}


function assembleThreePartsHero(props, childrens) {
  var definition = (props.definition == undefined) ? "hero" : "hero " + props.definition;
  return (
    <section className={definition}>
      <div class="hero-head">
        {childrens[0] != undefined && childrens[0]}
      </div>

      <div className="hero-body">
        {childrens[1] != undefined && childrens[1]}
      </div>

      <div class="hero-foot">
        {childrens[2] != undefined && childrens[2]}
      </div>

    </section>);
}

export default HeroThreeParts;