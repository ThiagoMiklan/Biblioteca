import React from 'react';
import Tabs from '../../src/components/Tabs';
import Columns from '../../src/components/Columns';
import Column from '../../src/components/Column';
import renderer from 'react-test-renderer';

var itens = [{ value: "Pictures", definition: "active"},
{ value: "Musica" },
{ value: "Videos" },
{ value: "Documents" }
];


var itens_icons = [{ value: "Pictures", definition: "is-active",icon_name:"fas fa-image"},
{ value: "Musica", icon_name: "fas fa-music" },
{ value: "Videos", icon_name: "fas fa-film", icon_definition: "has-text-success" },
{ value: "Documents", icon_name: "far fa-file-alt"}
];

var itens_full = [
{ value: "Left", icon_name: "fas fa-angle-left"},
{ value: "Up", icon_name: "fas fa-angle-up"},
{ value: "Right", icon_name: "fas fa-angle-right"}
];

test('value correctly', () => {
    const componentWithValue = renderer
        .create(
            <Columns>
            <Column >
                <div className="container is-fluid">
               
                    <Tabs itens={itens} />
                    <Tabs itens={itens} definition="is-centered" />
                    <Tabs itens={itens} definition="is-right" />
                   
                    <Tabs itens={itens_icons} />
    
                    <Tabs itens={itens} definition="is-small" />
                    <Tabs itens={itens} definition="is-medium" />
                    <Tabs itens={itens} definition="is-large" />
                    
                    <Tabs itens={itens_icons} definition="is-boxed" />
                    <Tabs itens={itens_icons} definition="is-toggle" />
                    <Tabs itens={itens_icons} definition="is-toggle is-toggle-rounded" />
    
                    <Tabs itens={itens_full} definition="is-fullwidth" />
    
                    <Tabs itens={itens_icons} definition="is-centered is-boxed"/>
                    <Tabs itens={itens_icons} definition="is-toggle is-fullwidth"/>
                    <Tabs itens={itens_icons} definition="is-centered is-boxed is-medium"/>
                    <Tabs itens={itens_icons} definition="is-toggle is-fullwidth is-large"/>
    
                </div>
            </Column>
        </Columns>
    
        )
        .toJSON();
    // componente com valor
    expect(componentWithValue).toMatchSnapshot();

});

