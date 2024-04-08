//UseReducer-L1

import { useReducer, useState } from "react";



function reducer(state, action) {
  console.log(state, action);
  //take state from initial value and action from dispatch
  //and then further 
  //lets take operation on them
  //state is basically count here 
  //and action takes value from dispatch
  // return state + action;
  //now  we defined actions with their name in dispatch
  //action={object jo define kiya hai dispatch ke ander}
  //lets use them here 
  // if (action.type === 'inc') return state + action.payload
  // if (action.type === 'dec') return state - action.payload
  // if (action.type === 'setCount') return action.payload
  //////////bhai agar aise krdu to
  if (action.type === 'inc') return state + 1
  if (action.type === 'dec') return state - 1
  if (action.type === 'setCount') return action.payload
  //or ab payload hatadeta hoon in dono ke dispatch se its easy
}



function DateCounter() {

  // const [count, dispatch] = useReducer(a function, initial stage)
  //reducer is a function  
  const [count, dispatch] = useReducer(reducer, 0)
  //we defines useReducer taking one function and initial values as argument
  //now we destructuring useReducer and we have 2 things one is count
  //and another one is dispatch
  //now how and when will this hook be called
  //just like setState its also called by dispatch
  //lets see how
  //but dispatch behave differently
  const [step, setStep] = useState(1);


  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch(-1)  //-1 is action for reduction function
    //but dispatch has more way to take argument 
    // dispatch({ type: 'dec', payload: -1 })
    //now this will be called with action
    //well in theory u can have this argument object in any format as u
    //wanted but follow the type and payload key:value pairs
    dispatch({ type: 'dec' })
  };

  const inc = function () {
    //in react lang we say dispatching a function
    // dispatch(1);
    //dispatch decides the action in reducer function

    // dispatch({ type: 'inc', payload: 1 })
    dispatch({ type: 'inc' })
  };

  const defineCount = function (e) {
    // dispatch(Number(e.target.value))
    dispatch({ type: 'setCount', payload: Number(e.target.value) })
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
