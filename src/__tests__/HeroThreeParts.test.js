import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroThreeParts from '../components/HeroThreeParts';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Tabs from '../components/Tabs';
import Button from '../components/Button';
import Icon from '../components/Icon';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';


var itens_navbar_end = [
    { value: "Home", definition: "active" },
    { value: "Examples" },
    { value: "Documentation" },
    { value: <Button definition="is-primary is-inverted"><Icon icon_name="fab fa-github">Github</Icon></Button> }]

var itens_tabs = [{ value: "Overview", definition: "active" }, { value: "Modifiers" }, { value: "Grid" }, { value: "Elements" }, { value: "Components" }, { value: "Layout" }]


test('hero three parts medium primary', () => {
    const component = renderer.create(<HeroThreeParts definition="is-medium is-primary">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>).toJSON();

    expect(component).toMatchSnapshot();
})

test('hero three parts fullheight success', () => {
    const component = renderer.create(<HeroThreeParts definition="is-fullheight is-info">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>).toJSON();

    expect(component).toMatchSnapshot();
})

test('hero three parts fullheight success', () => {
    const component = renderer.create(<HeroThreeParts definition="is-fullheight is-success">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>
    ).toJSON();

    expect(component).toMatchSnapshot();
})








