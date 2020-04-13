import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
import assembleListTabs  from '../tools/assembleListTabs';


const Tabs = (props)=>{
var definition = "tabs "+ classname(getClassName(props.definition,"Tabs"));

    return (<div className={definition}>
            {assembleListTabs(props.itens)}
            </div>
  );
}

Tabs.propTypes = {
    definition: PropTypes.string,
    itens: PropTypes.array
}

export default Tabs;