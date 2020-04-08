import React,{useState,useReducer} from 'react';

const initialState = {count: 0};

/*
// Utilizando Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}*/


function Counter(){
    const[state,setState] = useState(initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={()=>{setState({count: state.count+1})}}>+</button>
            <button onClick={()=>{setState({count: state.count-1})}}>-</button>
        </>
    )
}



export default Counter;