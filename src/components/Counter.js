import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/redux-index';

const Counter = () => {
  let counter = useSelector(state => state.counter.counter)
  let showCounter = useSelector(state => state.counter.showCounter)

  const dispatch = useDispatch();

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter());
   // dispatch({ type: 'toggle' }) 
  }

  const ResetHandler = () => { 
    dispatch(counterActions.reset());
    //dispatch({ type: 'reset' }) 
  };

  function handleIncrement() { 
    dispatch(counterActions.increment());
    // dispatch({ type: 'inc' })
   }

  function handleDecrement() { 
    dispatch(counterActions.decrement());
    //dispatch({ type: 'dec' }) 
  }

  function handleIncrease() { 
    dispatch(counterActions.increase(5))
    // dispatch({ type: 'increase', value: 5 })
   }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrease}>Increase by 5</button>
      <button onClick={ResetHandler}>Reset</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
