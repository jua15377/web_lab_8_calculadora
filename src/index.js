import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<h1>HelloW</h1>)
  }
}

ReactDOM.render(<App />, document.getElementById('index'))
