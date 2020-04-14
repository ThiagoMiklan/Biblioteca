import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './biblioteca/components/Tabs';
import './css/bulma.css';
import Section from './biblioteca/layout/Section';
import Title from './biblioteca/elements/Title';
import Subtitle from './biblioteca/elements/Subtitle';
import SubTitle from './biblioteca/elements/Subtitle';

ReactDOM.render(
    <Section>
    <Title definition={1}>Texto Principal</Title>
    <Title definition={3}>Texto Secundários</Title>
    <p>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável</p>
    </Section>
  , document.getElementById('root'));

