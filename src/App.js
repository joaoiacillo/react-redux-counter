import ArrowButton from './components/ui/ArrowButton';
import Counter from './components/ui/Counter';

function App() {
  return (
    <div className='container'>
      <ArrowButton />
      <Counter />
      <ArrowButton reversed={true} />
    </div>
  );
}

export default App;
