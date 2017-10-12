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

  toggleShowAnswer (evt) {
    evt.preventDefault();
    const { showAnswer } = this.state;
    if (!showAnswer && !this.input.value) return;
    this.setState({showAnswer: !showAnswer});
    if (showAnswer) this.back.focus()
  }

  render() {
    const {showAnswer} = this.state;
    return (
      <form className="App" onSubmit={this.toggleShowAnswer.bind(this)}>
        {showAnswer ? (
          <div>
            <p>Don't</p>
            <input type="submit" ref={(back) => {this.back = back;}} value="Back"/>
          </div>
          ) : (
            <div>
              How do I&nbsp;
                <input ref={(input) => {this.input = input;}} type="text"></input>
                ?
            </div>
        )}
      </form>
    );
  }
}

export default App;
