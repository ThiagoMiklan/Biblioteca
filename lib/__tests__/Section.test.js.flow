import React from 'react';
import Section from '../components/Section';
import Title from '../components/Title';
import renderer from 'react-test-renderer';

var itens = [
    {value:"Yes",disabled: false, onClick:()=>{alert("Yes")}},
    {value:"No",checked: true, onClick:()=>{alert("No")}},
    {value:"Maybe",checked: true, onClick:()=>{alert("Maybe")},disabled:true }
]

test('value correctly', () => {
  const componentWithValue = renderer
    .create( 
        <Section>
        <Title definition={1}>Texto Principal</Title>
        <Title definition={3}>Texto Secundários</Title>
        <p>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável</p>
        </Section>
    )
    .toJSON();
  // componente com valor
  expect(componentWithValue).toMatchSnapshot();


});

