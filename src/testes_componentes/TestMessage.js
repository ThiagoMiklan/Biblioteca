import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/elements/Button.jsx';
import Message from './biblioteca/components/Message.jsx';
import MessageList from './biblioteca/components/MessageList.jsx';
import './css/bulma.css';


/*
// funcionando message com header e tudo

ReactDOM.render( <Message name_header="testando" definition="success" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
" button={<Button definition="delete" />}/>,
    document.getElementById('root')
);

// Para ficar sem header, basta não informar a propriedade name_header, que não sera renderizado o o cabeçalho do message

ReactDOM.render( <Message definition="success" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
" button={<Button definition="delete" />}/>,
    document.getElementById('root')
);

// funcionando todos os tamanhos

ReactDOM.render( <Message name_header = "testando" definition="success small" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
" button={<Button definition="delete" />}/>,
    document.getElementById('root')
);

// funcionando lista de message

ReactDOM.render(
    <MessageList>
        <Message name_header = "testando" 
            definition="success small" 
            message="message 1"
            button={<Button definition="delete" />}/>
            <Message name_header = "testando" 
            definition="warning medium" 
            message="Message 2"
            button={<Button definition="delete" />}/>
            <Message name_header = "testando" 
            definition="success large" 
            message="danger 3"
            button={<Button definition="delete" />}/>
    </MessageList>
,
    document.getElementById('root')
);

*/