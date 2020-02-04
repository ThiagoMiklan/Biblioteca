import React from 'react';
import getClassName from '../../tools/getClassName';
import className from 'classnames';
import {renderToString} from 'react-dom/server'

class Content extends React.Component {

    render() {
        return (
        <div class="content">
            {assembleList(this.props)}
        </div>
        );
    }
}

 // monta o esqueleto da(s) lista(s) através do map e depois monta cada linha de cada lista
 function assembleList(props) {
    var list = props.value;
    
    var list_tags =
        <div className="content">
            {list.map(list_item =>
                <ol className={className(getClassName(list_item["definition"], "Content"))}>
                    {assembleRow(list_item["value"])}
                </ol>
            )}
        </div>

        return list_tags;
}

function assembleRow(value){
    return value.map(item => <li>{item}</li>);
}




export default Content;