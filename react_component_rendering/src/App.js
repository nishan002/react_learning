import './App.css';
import UseState from './components/useState/UseState'
import UseReducer from './components/useReducer/UseReducer'

function App() {
  return (
    <div className="App">
      <h2>UseState Render</h2>
      <UseState />
      <h2>UseReduce Render</h2>
      <UseReducer />
    </div>
  );
}

export default App;
