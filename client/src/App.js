import React, { Component } from "react";
import CharacterCard from "./components/card";
import Wrapper from "./components/wrapper";
import Title from "./components/header";
import Backdrop from "./components/backdrop";
import { Modal, Win, Loss} from "./components/modal";



import characters from "./characters.json";
import "./App.css";
import shuffle from "shuffle-array"

const myArr = [];
class App extends Component {
  
  state = {
    characters,
    count: 0,
    goCheckArr: [],
    isGameOver: false
  };
  
componentWillUpdate = () => {
this.myGOcheck() || this.myWinCheck() ?
  this.endGame() :
  shuffle(characters) 
}

endGame = () => {
  if(!this.state.isGameOver) {
    this.setState({ isGameOver: true })
  }
}

returnThis = (arg) => {
  return arg;
}
    saveClick = (id) => {
      if(!this.myWinCheck()){
        myArr.push(id)
        this.setState({ 
          count: this.state.count + 1,        
          goCheckArr: myArr
        });
      }
    
    }; 

    myGOcheck = () => {
      const arr = [];
      for(let i=0; i<= this.state.goCheckArr.length; i++) {
        if(arr[this.state.goCheckArr[i]] === undefined) {
          arr[this.state.goCheckArr[i]] = 1;
        }
        else {
          return true;
        }
      }
        return false;
    }

    myWinCheck = () => {
      if(this.state.goCheckArr.length === 12){
        return true
      }
      return false;
    }


  render() {
    return (
      <div>
        <Title>Click Count: {this.state.count}</Title>
        <Wrapper>
        {this.state.isGameOver ?
        (
        <div>
          <Backdrop /><Modal> {!this.myGOcheck() && this.myWinCheck() ? <Win/> : <Loss/>}</Modal>
        </div> ) : 
        (         
          this.state.characters.map(character => (
          <CharacterCard
            saveClick={this.saveClick}
            checkCount={this.checkCount}
            
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
            location={character.location}
          />
        )        
          ))}
        </Wrapper>
      </div>
    );
  }
}


export default App;
