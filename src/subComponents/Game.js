import { Component, React } from "react";


class Game extends Component{

    constructor(props){
        super(props); 
        const valueArray = this.makeQuestion();
        this.state = {   
            value1  : valueArray[0],
            value2  : valueArray[1],
            value3  : valueArray[2],
            proposedAnswer  : valueArray[3]
        }

    }


    makeQuestion =()=> {
       const value1 = Math.floor(Math.random() * 100);
       const value2 = Math.floor(Math.random() * 100);
       const value3 = Math.floor(Math.random() * 100);
       const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3); 
       return [value1, value2, value3 , proposedAnswer]; 
    }

    handleAnswer =event =>{
        const newValueArray = this.makeQuestion();
        this.updateState(newValueArray); 
        const hasAnswer =  this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(hasAnswer);

    }


    updateState =(newValuesArray)=>{
        this.setState((currState) =>({
            value1 : newValuesArray[0],
            value2 :newValuesArray[1],
            value3 :newValuesArray[2], 
            proposedAnswer : newValuesArray[3]
        }));
    }

    evaluateAnswer = (answer) =>{
        const { value1, value2, value3, proposedAnswer } = this.state;
        const corrAnswer = value1 + value2 + value3;

        return (
                (proposedAnswer === corrAnswer && answer === 'true') || 
                (proposedAnswer !== corrAnswer && answer === 'false') 
            ); 

    }

     
render(){
const {value1, value2, value3 , proposedAnswer} =  this.state;
    return(
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleAnswer}  name ="true">True</button>
          <button onClick={this.handleAnswer} name ="false">False</button>
          
        </div>

    );
}

}

export default Game; 