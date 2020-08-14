import React from 'react';
import Menu from '../../src/components/Menu.js';
import MenuItem from '../../src/components/MenuItem.js';
import renderer from 'react-test-renderer';

var onClickItem = () => { alert("Clicou") };

var itens_general = [
    { value: "General" }, { value: "Dashboard" }
]

var itens_adm = [
    { value: "Team Settings" }, {
        value: "Manage your team", definition: "is-active",
        sub_itens: [{ value: "Members" }, { value: "Plugins" }, { value: "Add a member" }]
    },
    { value: "Invitations" }, { value: "Cloud Storage Environment Settings" },
    { value: "Authentication" }
]

var itens_tran = [
    { value: "Payments" }, { value: "Transfer" }, { value: "Balance" }
]


test('menu', () => {
    const menu = renderer.create(
        <Menu>
            <MenuItem itens={itens_general} label="General"></MenuItem>
            <MenuItem itens={itens_adm} label="Administration"></MenuItem>
            <MenuItem itens={itens_tran} label="Transactions"></MenuItem>
        </Menu>
    ).toJSON();

    expect(menu).toMatchSnapshot();
})



