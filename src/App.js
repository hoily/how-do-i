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
    this.input.focus()
  }

    handleKeyPress = e => {
    const { showAnswer } = this.state;    
    if (e.key === 'Enter') {
      if (!showAnswer && this.input.value.length === 0) return
      this.toggleShowAnswer()
    }
  }

  toggleShowAnswer = () => {
    const { showAnswer } = this.state;
    this.setState({showAnswer: !showAnswer})
    if (showAnswer) this.back.focus()
  }

  render() {
    const {showAnswer} = this.state;
    return (
      <div className="App">
        {!showAnswer &&
          <div>
            How do I&nbsp;
            <input ref={(input) => {this.input = input;}} type="text" onKeyDown={this.handleKeyPress}></input>
            ?
          </div>
        }
        {showAnswer && 
          <div>
            <p>Don't</p>
            <input type="button" onClick={this.toggleShowAnswer} ref={(back) => {this.back = back;}} value="Back"/>
          </div>
        }
      </div>
    );
  }
}

export default App;
