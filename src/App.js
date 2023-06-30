import './App.css';
import ControlledComponents from './components/ControlledComponents';
import FormSubmit from './components/FormSubmit';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Forms in React</h1>
        <p>There are many ways to deal with forms on React. Here are two ones</p>
      <ControlledComponents/>
      <FormSubmit/>
      </header>
    </div>
  );
}

export default App;
