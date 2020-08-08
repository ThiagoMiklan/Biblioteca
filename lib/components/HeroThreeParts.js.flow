// @flow
import * as React from 'react';
import { InvalidNumberChilds, assembleDefaultMessage } from '../exception/InvalidNumberChilds';
import { validate } from '../tools/type_validations.js';
// Com filhos
// Sem eventos
// Especialização do componente Hero
// Suporte a header,body and footer
// Deve ser informar como filhos em sequência header,body e footer
// Caso seja informado 1 filho : Será montado apenas o header
// Caso sejam informados 2 filhos : Será montado header e body
// Caso sejam informados 3 filhos: Será montado header,body e footer

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

function assemble(childrens, props) {
  var validChildrensNumber = (childrens.length <= 3) ? true : false;;
  var code = <></>;
  if (validChildrensNumber) {
    code = assembleThreePartsHero(props, childrens);
  } else {
    throw new InvalidNumberChilds(assembleDefaultMessage(childrens.length));
  }

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