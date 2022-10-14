import logo from './react.png';
import './App.css';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';

function App() {
  return (
    <div>
      <FuncComp></FuncComp>
      <hr>
      </hr>
      <ClassComp></ClassComp>
    </div>
  );
}

export default App;
