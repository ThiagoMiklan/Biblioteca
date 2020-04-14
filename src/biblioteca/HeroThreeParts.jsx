import React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';
import {InvalidNumberChilds,assembleDefaultMessage} from '../exception/InvalidNumberChilds';

// Com filhos
// Sem eventos
// Especialização do componente Hero
// Suporte a header,body and footer
// Deve ser informar como filhos em sequência header,body e footer
// Caso seja informado 1 filho : Será montado apenas o header
// Caso sejam informados 2 filhos : Será montado header e body
// Caso sejam informados 3 filhos: Será montado header,body e footer



const HeroThreeParts = (props)=>{
    var childrens =  React.Children.map(props.children, (child, i) => {return child});
    return assemble(childrens,props);
}

function assemble(childrens,props){
  var validChildrensNumber = (childrens.length <= 3) ? true : false;;
  var code = <></>;
  if(validChildrensNumber){
    code = assembleThreePartsHero(props,childrens);
  }else{
    throw new InvalidNumberChilds(assembleDefaultMessage(childrens.length));
  }

  return code;
}
// recebe a props e junto com os filhos monta head,body e footer
function assembleThreePartsHero(props,childrens){
    var definition =  classnames(getClassName("hero "+ props.definition,"Hero"));
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
HeroThreeParts.propTypes ={
    definition: PropTypes.string
}

export default HeroThreeParts;