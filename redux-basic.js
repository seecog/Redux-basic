var redux = require('redux');

var createStore = redux.createStore;

var currentState = {
    count : 0
}

var rootReducer = (state=currentState,action)=>{
    if(action.type=='INC_COUNTER'){
        return {
            ...state,
            count : state.count+1
        }
    }
    if(action.type=='ADD_COUNTER'){
        return {
            ...state,
            count : state.count+action.value
        }
    }
return state;
}

var store = createStore(rootReducer);
console.log('The store is ',store.getState())



store.subscribe(()=>{
    console.log("[subscribe ]",store.getState())
})



store.dispatch({type : 'INC_COUNTER'});
store.dispatch({type : 'ADD_COUNTER',value : 10})
console.log('The store is ',store.getState())
