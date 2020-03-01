import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

const Panel = (props) => {
    return (
        <nav class="panel">
            {assembleHeading()}
            {assembleTabs()}
            {assembleBlocks()}
        </nav>
    );
}

function assembleHeading(heading) {
    return <p class="panel-heading">
            {heading}
            </p>
}

function assembleTabs() {

}

function assembleBlocks() {

}