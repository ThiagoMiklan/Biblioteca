import React from 'react';
import TableQuery from '../../src/components/TableQuery';
import renderer from 'react-test-renderer';

var itens = [
    { nome: "Jackson", email: "jackson@arb.com.br", telefone: "123456" },
    { nome: "Marty", email: "marty@arb.com.br", telefone: "123456" },
    { nome: "Walter", email: "walter@arb.com.br", telefone: "123456" },
    { nome: "Antony", email: "antony@arb.com.br", telefone: "123456" }
]

test('value correctly', () => {
    const componentWithValue = renderer
        .create(
            <div className="container is-fluid">
                <TableQuery definition="is-fullwidth is-bordered" itens={itens} header={true} />
                <TableQuery definition="is-fullwidth is-striped" itens={itens} header={true} />
                <TableQuery definition="is-fullwidth is-narrow" itens={itens} header={true} />
                <TableQuery definition="is-fullwidth is-hoverable" itens={itens} header={true} />
                <TableQuery definition="is-fullwidth" itens={itens} header={true} footer={true} />
                <TableQuery definition="is-fullwidth" itens={itens} footer={true} />
                <TableQuery definition="is-bordered is-striped is-narrow is-hoverable is-fullwidth" itens={itens} />
                <br></br>
            </div>
        )
        .toJSON();
    // componente com valor
    expect(componentWithValue).toMatchSnapshot();

    
});

