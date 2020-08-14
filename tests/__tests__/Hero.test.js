import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../../src/components/Hero';
import Button from '../../src/components/Button';
import NavigationBar from '../../src/components/NavigationBar';
import HeroThreeParts from '../../src/components/HeroThreeParts';
import Title from '../../src/components/Title';
import Subtitle from '../../src/components/Subtitle';
import Tabs from '../../src/components/Tabs';
import renderer from 'react-test-renderer';



var itens_navbar_start = [{ value: "Home" }, { value: "Documentation" }]
var itens_navbar_end = [{ value: <Button definition="is-dark">Github</Button> }, { value: <Button definition="is-link">Download</Button> }]
var itens_tabs = [{ value: "Modifiers" }, { value: "Grid" }, { value: "Elements" }, { value: "Components" }, { value: "Layout" }]

test('hero colors', () => {
    const colors = renderer.create(
        <>
            <Hero title="Hero Title" subtitle="Hero Subtitle" />
            <Hero definition="is-primary" title="Primary Title" subtitle="Primary Subtitle" />
            <Hero definition="is-info" title="Info Title" subtitle="Info Subtitle" />
            <Hero definition="is-success" title="Success Title" subtitle="Success Subtitle" />
            <Hero definition="is-warning" title="Warning Title" subtitle="Warning Subtitle" />
            <Hero definition="is-danger" title="Danger Title" subtitle="Danger Subtitle" />
            <Hero definition="is-light" title="Light Title" subtitle="Light Subtitle" />
            <Hero definition="is-dark" title="Dark Title" subtitle="Dark Subtitle" />
        </>
    ).toJSON();

    expect(colors).toMatchSnapshot();
})

test('hero bold', () => {
    const bold = renderer.create(
        <>
            <Hero definition="is-primary is-bold" title="Primary Title" subtitle="Primary Subtitle" />
            <Hero definition="is-info is-bold" title="Info Title" subtitle="Info Subtitle" />
            <Hero definition="is-success  is-bold" title="Success Title" subtitle="Success Subtitle" />
            <Hero definition="is-warning is-bold" title="Warning Title" subtitle="Warning Subtitle" />
            <Hero definition="is-danger is-bold" title="Danger Title" subtitle="Danger Subtitle" />
            <Hero definition="is-light is-bold" title="Light Title" subtitle="Light Subtitle" />
            <Hero definition="is-dark is-bold" title="Dark Title" subtitle="Dark Subtitle" />
        </>
    ).toJSON();

    expect(bold).toMatchSnapshot();
})

test('hero merge', () => {
    const merge = renderer.create(
        <>
            <Hero definition="is-primary is-medium" title="Primary Title" subtitle="Primary Subtitle" />
            <Hero definition="is-info is-large" title="Info Title" subtitle="Info Subtitle" />
            <Hero definition="is-success is-large" title="Success Title" subtitle="Success Subtitle" />
        </>
    ).toJSON();

    expect(merge).toMatchSnapshot();
})

test('navigation bar', () => {
    const nav = renderer.create(
        <>
            <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
            <Hero definition="is-link is-fullheight-with-navbar" title="With navbar" />
        </>
    ).toJSON();

    expect(nav).toMatchSnapshot();
})

test('three parts', () => {
    const nav = renderer.create(
        <HeroThreeParts definition="is-fullheight">
            <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
            <div className="container has-text-centered">
                <Title definition={1}>Title</Title>
                <Subtitle definition={2}>Subtitle</Subtitle>
            </div>
            <Tabs itens={itens_tabs}></Tabs>
        </HeroThreeParts>
    ).toJSON();

    expect(nav).toMatchSnapshot();
})
