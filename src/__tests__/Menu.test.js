import React from 'react';
import Menu from '../biblioteca/Menu.jsx';
import MenuItem from '../biblioteca/MenuItem.jsx';
import renderer from 'react-test-renderer';
 

var onClickItem = ()=>{alert("Clicou")};

var itens_general = [
    {value: "General"}, {value:"Dashboard"}
]

var itens_adm = [
    {value:"Team Settings"},{value:"Manage your team",definition:"active",
    sub_itens:[{value:"Members"},{value:"Plugins"},{value:"Add a member"}]},
    {value:"Invitations"},{value:"Cloud Storage Environment Settings"},
    {value:"Authentication"}
]

var itens_tran =[
    {value: "Payments"},{value: "Transfer"},{value:"Balance"}
]

var item = {};

// para adicionar os subitens, informa o nome do iteam, o label e os itens de subitem
var itens_general_without_event = {value:"Manage your team", 
sub_itens:[{value:"Member"},{value:"Plugin"},{value:"Add a member"}]
}

var itens_administration_without_event =
 [{value:"Dashboard"}, 
 {value:"Customers",
 sub_itens:[{value:"Member"},
 {value:"Plugin"},
 {value:"Add a member"}]}];
 
var itens_merge = [{value:"item 1",sub_itens:[{value:"1"},{value:"2"}]} ,{value:"item 2",sub_itens:[{value:1},{value:2}]}]


var itens_general_with_event = 
{value:"Manage your team",onClick:onClickItem ,sub_itens:[{value:"Member", onClick:onClickItem},{value:"Plugin"},{value:"Add a member"}]}

var itens_administration_with_event =
[{value:"Dashboard",onClick:onClickItem },
 {value:"Customers",sub_itens:["Member","Plugin","Add a member"]},
];


test('menu',()=>{
    const menu =  renderer.create(
        <Menu>
                <MenuItem itens={itens_general} label="General"></MenuItem>
                <MenuItem itens={itens_adm} label="Administration"></MenuItem>
                <MenuItem itens={itens_tran} label="Transactions"></MenuItem>
          </Menu>
    ).toJSON();

    expect(menu).toMatchSnapshot();
})



