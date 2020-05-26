import React from 'react';
import ProgressBar from '../biblioteca/ProgressBar';
import renderer from 'react-test-renderer';

test('progressbar fixed', () => {
    const pb_fixed = renderer.create(
        <>
            <ProgressBar value="15" max="100" />
            <ProgressBar definition="primary" value="15" max="100" />
            <ProgressBar definition="link" value="30" max="100" />
            <ProgressBar definition="info" value="45" max="100" />
            <ProgressBar definition="success" value="60" max="100" />
            <ProgressBar definition="warning" value="75" max="100" />
            <ProgressBar definition="danger" value="90" max="100" />
        </>
    ).toJSON();

    expect(pb_fixed).toMatchSnapshot();

});

test('progressbar sizes', () => {
    const pb_sizes = renderer.create(
        <>
            <ProgressBar definition="small" value="15" max="100" />
            <ProgressBar definition="medium" value="15" max="100" />
            <ProgressBar definition="large" value="15" max="100" />
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
