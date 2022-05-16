

import './App.css';
import TodoContainer from './components/TodoContainer';



function App() {
  // when faced with lots of todos back ground color doesnt continue
  return (
    <div className=' h-screen bg-blue-50 border-box'>
      <TodoContainer />
    </div>
  )
}

export default App;
