import React from 'react';
import {useRef} from 'react';
import useStateWithCallback from 'use-state-with-callback';
import TesteHook from './TesteHook';
import { useState } from 'react';

/*
Para construção do button, foi usado um pouco da ideia presente no trabalho correlato
react-bootstrap, onde o componente button é chamado através do react e lhe é passado um valor
que definirá sua cor, esse valor é único, como "danger,primary" exatamente como boa parte
dos componentes foram desenvolvidos, porém sem o uso de tantas tags quanto foi usada pela biblioteca react-bootstrap
*/
function x(){
  alert("olá hook");
}
const ButtonHook = ()=>{
  const inputEl = useRef(x);
  var x = inputEl.current;
  var y = 0;
  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
   alert(inputEl.current);
    
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </>
  );
}

export default ButtonHook;