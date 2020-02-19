import React from 'react';
import Button from '../biblioteca/elements/Button';

class App extends React.Component {
   
    state = {
      modalOpen: false,
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.setState({ modalOpen: true })}>
            Exibir modal
          </button>
          <button onClick={() => this.setState({ modalOpen: false })}>
            Remover modal
          </button>
  
          { this.state.modalOpen && <Button definition="button primary" value="testando
          "/> }
        </div>
      );
    }
  }

  export default App;