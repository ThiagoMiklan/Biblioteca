import React from 'react';
import ProgressBar from '../biblioteca/elements/ProgressBar';
import renderer from 'react-test-renderer';

test('progressbar fixed', () => {
    const pb_fixed = renderer.create(
        <>
            <ProgressBar max="100" value="15" max="100"></ProgressBar>
            <ProgressBar definition="primary" value="15" max="100"></ProgressBar>
            <ProgressBar definition="link" value="30" max="100"></ProgressBar>
            <ProgressBar definition="info" value="45" max="100"></ProgressBar>
            <ProgressBar definition="success" value="60" max="100"></ProgressBar>
            <ProgressBar definition="warning" value="75" max="100"></ProgressBar>
            <ProgressBar definition="danger" value="90" max="100"></ProgressBar>
        </>
    ).toJSON();

    expect(pb_fixed).toMatchSnapshot();

});

test('progressbar sizes', () => {
    const pb_sizes = renderer.create(
        <>
            <ProgressBar definition="small" value="15" max="100"></ProgressBar>
            <ProgressBar definition="" value="30" max="100"></ProgressBar>
            <ProgressBar definition="medium" value="45" max="100"></ProgressBar>
            <ProgressBar definition="large" value="60" max="100"></ProgressBar>
        </>
    ).toJSON();

    expect(pb_sizes).toMatchSnapshot();

});


test('progressbar inderminate', () => {
    const pb_inderterminated = renderer.create(
        <>
            <ProgressBar definition="small primary" max="100"></ProgressBar>
            <ProgressBar definition="danger" max="100"></ProgressBar>
            <ProgressBar definition="medium dark" max="100"></ProgressBar>
            <ProgressBar definition="large info" max="100"></ProgressBar>
        </>
    ).toJSON();

    expect(pb_inderterminated).toMatchSnapshot();

});
