import React from 'react';
import Input from '../components/Input'
import renderer from 'react-test-renderer';

test('input colors', () => {
    const input = renderer.create(
        <>
          <Input definition="is-primary" type="password" placeholder="Primary input"/>
    <Input definition="is-info" type="text" placeholder="Info input"/>
    <Input definition="is-success" type="text" placeholder="Success input"/>
    <Input definition="is-warning" type="text" placeholder="Warning input"/>
    <Input definition="is-danger" type="text" placeholder="Danger input"/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input sizes', () => {
    const input = renderer.create(
        <>
           <Input definition="is-small" type="text" placeholder="Small input"/>
    <Input definition="is-normal" type="text" placeholder="Normal input"/>
    <Input definition="is-medium" type="text" placeholder="Medium input"/>
    <Input definition="is-large" type="text" placeholder="Large input"/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input rounded', () => {
    const input = renderer.create(
        <>
             <Input definition="is-rounded" type="text" placeholder="Rounded input"/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input loading sizes', () => {
    const input = renderer.create(
        <>
            <Input definition="is-loading is-small" type="text" placeholder="Loading input small" />
    <Input definition="is-loading" type="text" placeholder="Loading input normal"/>
    <Input definition="is-loading is-medium" type="text" placeholder="Loading input medium" />
    <Input definition="is-loading is-large" type="text" placeholder="Loading input large"/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input disabled', () => {
    const input = renderer.create(
        <>
              <Input definition="is-loading is-large" type="text" placeholder="Loading input large" disabled={true}/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

