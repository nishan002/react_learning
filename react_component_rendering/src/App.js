import './App.css';
import UseState from './components/useState/UseState'
import UseReducer from './components/useReducer/UseReducer'
import ObjectUseState from './components/ImmutableState/ObjectUseState'
import Parent from './components/ParentChildRender/Parent';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';

function App() {
return (
    <div className="App">
        {/* <h2>UseState Render</h2>
        <UseState />
        <h2>UseReduce Render</h2>
        <UseReducer />
        <h2>Object useState Render</h2>
        <ObjectUseState />
        <h2>Parent Child Render</h2>
        <Parent />
        <h2>GrandParent ParentOne ChildOne Render</h2>
        <GrandParent /> */}
        <h2>Memo for Optimization</h2>
        <ParentTwo />
    </div>
);
}

export default App;
