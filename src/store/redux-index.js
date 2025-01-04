import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = { counter: 0, showCounter: true };

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

const authSlice = createSlice({
  name:'authentication',
  initialState: { authenticated: false},
  reducers:{
    login(state){
      state.authenticated = true;
    },
    logout(state){
      state.authenticated = false;
    }
  }
});

// Configure the store with the slice reducer
const counterStore = configureStore({
  reducer: {counter: counterSlice.reducer , auth: authSlice.reducer},
});

// Export actions and store
export const counterActions = counterSlice.actions; // Renamed from counterAction to counterActions
export const authActions = authSlice.actions;
export default counterStore;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'inc') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }
//     else if (action.type === 'dec') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//     else if (action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }
//     else if(action.type === 'reset'){
//         return {
//             ...state,
//             counter: 0
//         }
//     }
//     else if(action.type === 'toggle'){
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

// const counterStore = createStore(counterReducer);

// export default counterStore;


// const counterSubscribe = () =>{
//     counterStore.getState();
// }

// counterStore.subscribe(counterSubscribe);

