import React from 'react';
import Table from '../biblioteca/Table';
import renderer from 'react-test-renderer';

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


var elements_footer = elements_header;

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

test('test table',()=>{
    const table = renderer.create(
        <Table rows_header={elements_header} 
        rows_footer={elements_footer} 
        rows_body={elements_body}/>
    ).toJSON();

    expect(table).toMatchSnapshot();
})