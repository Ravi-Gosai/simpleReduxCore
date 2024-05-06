import { createStore } from "redux";

const store = createStore(reducer);

function reducer(state = { amount: 1 }, action) {
    if(action.type === 'increment2'){
        return {amount : state.amount +2}
    }
    if(action.type === 'decrement2'){
        return {amount : state.amount -2}
    }
  return state;
}

// setInterval(()=>{

//     store.dispatch({type : 'increment'})
// },2000)
// store.dispatch({type : 'increment'})
store.subscribe(()=>{

    console.log(store.getState());
})

// console.log(store.getState());

store.dispatch({type: 'increment2'})
store.dispatch({type: 'decrement2'})