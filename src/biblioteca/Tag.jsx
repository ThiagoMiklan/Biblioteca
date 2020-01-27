import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import { renderToString } from 'react-dom/server';

class Tag extends React.Component {

    render() {
        return (assembleTag(this.props));
    }

}

function assembleTag(props) {
    var tag = "";
    
    if (Array.isArray(props.tag)) {
        tag = assembleListOfTags(props);
    } else {
        tag = assembleSingleTag(props.definition,props.value);
    }

    return tag;
}

/*  - Método que cria uma única tag
    - Parâmetro definition precisa ser string
    - definition refere-se as classes do Bulma que serão usadas na tag
    - value representa o valor texto que aparecerá dentro da tag
*/
function assembleSingleTag(definition,value) {
  
    return <span className ={classnames(getClassName(definition,"Tag"))}>{value}</span>;
}

/*  - Método que cria uma lista de tags
*/
function assembleListOfTags(props) {
   var tag = <div className="tags">
                {props.tag.map(tag => assembleSingleTag(tag["definition"],tag["value"]))}
             </div>

    var x = renderToString(tag);
    return tag;
}

function convertDefinitionToString(definition){
    
}


Tag.propTypes = {
    value: PropTypes.string,
    list: PropTypes.bool,
    tag: PropTypes.object
}

export default Tag;