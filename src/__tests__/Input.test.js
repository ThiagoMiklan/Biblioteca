import React from 'react';
import Input from '../biblioteca/Input'
import renderer from 'react-test-renderer';

test('input colors', () => {
    const input = renderer.create(
        <>
            <Input definition="primary" type="password" placeholder="Primary input" />
            <Input definition="info" type="text" placeholder="Info input" />
            <Input definition="success" type="text" placeholder="Success input" />
            <Input definition="warning" type="text" placeholder="Warning input" />
            <Input definition="danger" type="text" placeholder="Danger input" />
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input sizes', () => {
    const input = renderer.create(
        <>
            <Input definition="small" type="text" placeholder="Small input" />
            <Input type="text" placeholder="Normal input" />
            <Input definition="medium" type="text" placeholder="Medium input" />
            <Input definition="large" type="text" placeholder="Large input" />
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input rounded', () => {
    const input = renderer.create(
        <>
            <Input definition="rounded" type="text" placeholder="Rounded input" />
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input loading sizes', () => {
    const input = renderer.create(
        <>
            <Input definition="loading small" type="text" placeholder="Loading input small" />
            <Input definition="loading" type="text" placeholder="Loading input normal" />
            <Input definition="loading medium" type="text" placeholder="Loading input medium" />
            <Input definition="loading large" type="text" placeholder="Loading input large" />
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

test('input disabled', () => {
    const input = renderer.create(
        <>
            <Input definition="loading large" type="text" placeholder="Loading input large" disabled={true}/>
        </>
    ).toJSON();

    expect(input).toMatchSnapshot();
})

