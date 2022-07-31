import React, {useReducer} from 'react';

function reduser(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value +1};
        case 'DECRMENT':
            return {value: state.value -1};
        default:
            return state;        
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reduser, {value: 0});

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECRMENT'})}>-1</button>
        </div>
    );
};

export default Counter;