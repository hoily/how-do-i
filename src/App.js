import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showAnswer: false
    }
  }
  componentDidMount(){
    this.input.focus();
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.toggleShowAnswer()
    }
  }

  toggleShowAnswer = () => {
    const { showAnswer } = this.state;
    this.setState({showAnswer: !showAnswer})
  }

  render() {
    const {showAnswer} = this.state;
    return (
      <div className="App">
        {!showAnswer &&
          <div>
            How do I&nbsp;
            <input ref={(input) => {this.input = input;}} onKeyPress={this.handleKeyPress} type="text"></input>
            ?
          </div>
        }
        {showAnswer && 
          <div>
            <p>Don't</p>
            <input type="button" onClick={this.toggleShowAnswer} value="Back"/>
          </div>
        }
      </div>
    );
  }
}

export default App;
