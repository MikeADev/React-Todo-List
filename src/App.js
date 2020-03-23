import React from 'react'
import './App.css'
import Todos from './components/Todos'

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
            <Todos/>
        </ul>
      </div>
    );
  }
}

export default App