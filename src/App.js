
import { useReducer } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoContext from './contexts/TodoContexts';


function App() {

  return (
    <>
      {/* <DesktopNavBar /> */}

      <TodoContainer />

    </>
  );
}

export default App;
