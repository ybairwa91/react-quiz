//UseReducer-L2
//we use useReducer for complex states
//when state is going to be an object 
//means here till now we use only count variable 
//but lets take more variables into the picture and analyse is
//thoroughly to use useReducer

import { useReducer } from "react";

const initialState = { count: 0, step: 1 }

function reducer(state, action) {
  console.log(state, action);
  // if (action.type === 'inc') return state + 1
  // if (action.type === 'dec') return state - 1
  // if (action.type === 'setCount') return action.payload 
  // return { count: 0, step: 1 }
  //ab kya ho rhaa hai bhai ki
  //apan ne useReducer define kiya hai state karke variable ke liye
  //to kya hoga ki usko hi update krna hai ab hume
  //matlab ki ab reducer ke state me 2chize ayengi or
  //dispatch me bhi apan actions in dono ke liye lengee lets see how
  //click krke dekh plus or minus pe samjh ayega kya bol rhaa hoon m
  //ab update to krenge state ko but object me
  //ab state object ke format me aegaa to update bhi usi tarike se krnaa pdega

  //lets use switch

  // switch (action.type) {
  //   case 'inc':
  //     return { ...state, count: state.count + 1 }
  //   case "dec":
  //     return { ...state, count: state.count - 1 }
  //   case 'setCount':
  //     return { ...state, count: action.payload }
  //   case 'setStep':
  //     return { ...state, step: action.payload }
  //   default:
  //     throw new Error('Unknown action')
  // }
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step }
    case "dec":
      return { ...state, count: state.count - state.step }
    case 'setCount':
      return { ...state, count: action.payload }
    case 'setStep':
      return { ...state, step: action.payload }
    // case 'reset':
    //   return { ...state, step: 1, count: 0 }
    // case 'reset':
    //   return { count: 0, step: 1 }
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action')
  }

}



function DateCounter() {
  // const [count, dispatch] = useReducer(reducer, 0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state


  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' })
  };

  const inc = function () {
    dispatch({ type: 'inc' })
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) })
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) })
  };

  const reset = function () {
    dispatch({ type: 'reset' })

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
