import React from 'react';
import DropDown from '../../src/components/DropDown';
import renderer from 'react-test-renderer';

var itens_link = [
    { value: "Dropdown Button", link: true, href: "https://ufsc.br", onClick: () => { alert("Clicou") } },
    { value: "Dropdown Item", link: true, href: "https://ufsc.br" },
    { value: "Other Dropdown Item", link: true, href: "https://ufsc.br" },
    { value: "Active Dropdown Item", link: true, definition: "is-active", href: "https://ufsc.br" },
    { value: "Other Dropdown Item", link: true, href: "https://ufsc.br" },
    { value: "With a divider", link: true, href: "https://ufsc.br" }
];

var itens_div = [
    { value: <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>, onClick: () => { alert("Clicou") } },
    { value: <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p> },
    { value: "This is a link", link: true }
];

test('dropdown normal',()=>{
    const normal = renderer.create(
        <DropDown definition="is-active" itens={itens_link} />
    ).toJSON();

    expect(normal).toMatchSnapshot();
})

test('dropdown with any type of content',()=>{
    const anyContent = renderer.create(
        <DropDown definition="is-active is-right" itens={itens_div} />
    ).toJSON();

    expect(anyContent).toMatchSnapshot();
})


        
        
