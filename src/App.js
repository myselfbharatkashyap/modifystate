import { Component, React } from 'react'
import logo from './logo.svg';
import './App.css';
import Game from "./subComponents/Game";
import Score from "./subComponents/Score";

class App extends Component {
state = {   
  numQuestions : 0,
  numCorrect : 0,
  };
  
  trueORfalse = (istrue) =>{
    
    if (istrue) {
      this.setState((currstate) => ({
        numCorrect :currstate.numCorrect +1
      }));
    }

    this.setState((currstate) => ({
      numQuestions :currstate.numQuestions +1
    }));
  }
  
  render() {
 
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game handleAnswer={this.trueORfalse}></Game>
        <Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect}></Score>
      </div>
    );
  }
}

export default App;
