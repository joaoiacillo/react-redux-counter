import { useDispatch } from 'react-redux';
import { actions } from "./features/counter/slice";

import ArrowButton from './components/ui/ArrowButton';
import Counter from './components/ui/Counter';

const { increment, decrement } = actions;

function App() {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <ArrowButton onClick={() => dispatch(increment())} />
      <Counter />
      <ArrowButton reversed={true} onClick={() => dispatch(decrement())} />
    </div>
  );
}

export default App;
