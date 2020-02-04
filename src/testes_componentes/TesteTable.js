import React from 'react';
import ReactDOM from 'react-dom';
import Table from './biblioteca/Table.jsx';
import './css/bulma.css';



//TESTE TABLE

/*
 elements_header representa o elementos que serão utilizados no cabeçalho da tabela
 , observando que foi adicionado a possibilidade de informar um abbr text e não apenas o 
 valor normal do cabeçalho, diferenciando um pouco dos outros componentes criados onde uso mais
 value e definition.
*/
var elements_header = [];
elements_header.push({"value":"Pos","abbr_text":"Position"});
elements_header.push({"value":"Pld","abbr_text":"PLayed"});
elements_header.push({"value":"W","abbr_text":"Won"});
elements_header.push({"value":"D","abbr_text":"Drawn"});
elements_header.push({"value":"L","abbr_text":"Lost"});
elements_header.push({"value":"Gl","abbr_text":"Goals for"});
elements_header.push({"value":"GA","abbr_text":"Gaols Against"});
elements_header.push({"value":"GD","abbr_text":"Goal diferrence"});
elements_header.push({"value":"PTS","abbr_text":"Points"});
elements_header.push("Qualification or Relegation");

// seta os elementos do rodapé para serem iguais do cabeçalho
var elements_footer = elements_header;

/* aqui estão os elementos que compõem o corpo da tabela, no caso, o corpo 
da tabela é composto de um array de arrays 
Observa-se outra exceção, have_link  e href foi adicionado como propriedade para que seja 
possível utilizar hipertexto nos componentes da tabela
*/
var elements_body1= [];
elements_body1.push(1);
elements_body1.push({"value":"Leicester", "have_link":true,"href":"https://en.wikipedia.org/wiki/Manchester_United_F.C."});
elements_body1.push(38);
elements_body1.push(23);
elements_body1.push(12);
elements_body1.push(3);
elements_body1.push(6);
elements_body1.push(36);
elements_body1.push(32);
elements_body1.push("Qualification for the Champions League Group Stage")


var elements_body2 = [];
elements_body2.push(1);
elements_body2.push({"value":"Leicester", "have_link":true});
elements_body2.push(38);
elements_body2.push(23);
elements_body2.push(12);
elements_body2.push(3);
elements_body2.push(6);
elements_body2.push(36);
elements_body2.push(32);
elements_body2.push("Qualification for the Champions League Group Stage")

var elements_body = [];

elements_body[0] = elements_body1;
elements_body[1] = elements_body2;

/* TESTE 1 - Componente tabela com todos os elementos informados 
    Resultado: Todos componentes informados foram exibidos com sucesso, assim como com suas variantes(abbr,link e href)

    TESTE 2- Retirado  header
    Resultado: Tabela exibida apenas body e footer

    TESTE 3 - Retirado footer
    Resultado: Tabela exibida apenas body e header

    TESTE 4 -  Retirado body
    Resultado: Tabela exibida apenas com header e footer
    
    TESTE 5 - Retirar todos
    Resultado: Página em branco, porém sem erros.

    TESTE 6 - Adicionando tipos inválidos ao invés de array
    Resultado: Não exibe nenhum dos dados quando tipo errado é informado.
    Para o teste 6 foram informados objetos,string no rows_header, rows_footer e rows_body  e o resultado foi de não aparecer nada
    Ao informar vazio ex: rows_header ={},o erro é de compilação
    
    
*/
ReactDOM.render(
    <Table rows_header={elements_header} 
           rows_footer={elements_footer} 
           rows_body={elements_body}/>,
   document.getElementById('root')
  );
