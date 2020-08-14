import React from 'react';
import ProgressBar from '../../src/components/ProgressBar';
import renderer from 'react-test-renderer';

test('progressbar fixed', () => {
    const pb_fixed = renderer.create(
        <>
            <ProgressBar value={15} max={100} />
            <ProgressBar definition="is-primary" value={15} max={100} />
            <ProgressBar definition="is-link" value={30} max={100} />
            <ProgressBar definition="is-info" value={45} max={100} />
            <ProgressBar definition="is-success" value={60} max={100} />
            <ProgressBar definition="is-warning" value={75} max={100} />
            <ProgressBar definition="is-danger" value={90} max={100} />
        </>
    ).toJSON();

    expect(pb_fixed).toMatchSnapshot();

});

test('progressbar sizes', () => {
    const pb_sizes = renderer.create(
        <>
            <ProgressBar definition="is-small" value={15} max={100} />
            <ProgressBar definition="is-medium" value={15} max={100} />
            <ProgressBar definition="is-large" value={15} max={100} />
        </>
    ).toJSON();

    expect(pb_sizes).toMatchSnapshot();

});


test('progressbar inderminate', () => {
    const pb_inderterminated = renderer.create(
        <>
            <ProgressBar definition="is-small is-primary" max={100}></ProgressBar>
            <ProgressBar definition="is-danger" max={100}></ProgressBar>
            <ProgressBar definition="is-medium is-dark" max={100}></ProgressBar>
            <ProgressBar definition="is-large is-info" max={100}></ProgressBar>
        </>
    ).toJSON();

    expect(pb_inderterminated).toMatchSnapshot();

});
