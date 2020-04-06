import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';


class Image extends React.Component {

    render() {
        return (
        <figure className={classnames(getClassName(this.props.definition, "Image"))} >
            <img src={this.props.src}/>
        </figure>);
    }

}

Image.propTypes = {
    definition: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;