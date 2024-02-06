import './App.css';
import MyComponent from './components/MyComponent';
import MyCounter from './components/MyCounter';
import MyForm from './components/MyForm';
import MyTitle from './components/MyTitle';

function App() {
  return (
    <>
    <MyComponent/>
    <MyCounter/>
    <MyForm/>
    <MyTitle title="This is my Title"/>
    </>
  );
}

export default App;
