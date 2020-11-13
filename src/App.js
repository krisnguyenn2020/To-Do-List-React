
import { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'



class App extends Component {
  constructor() {
    super();
    this.TodoItems = [
      'Do Homework',
      'Hang out',
      'Workout'
    ];
  }


  render() {
    return (
      <div className="App">
        {
          this.TodoItems.map((item, index) =>  <TodoItem key={index} title = {item} />)

        }
      </div>
    );
  }
}
export default App;
