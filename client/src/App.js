import React, { Component } from "react";
import CharacterCard from "./components/characterCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
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
this.myGOcheck() ?
  this.endGame() :
  shuffle(characters) 
}

endGame = () => {
  this.state.isGameOver ?
  console.log('nothing') :
  this.setState({ isGameOver: true }) 
}

returnThis = (arg) => {
  return arg;
}
    saveClick = async (id) => {
      myArr.push(id)
      await this.setState({ 
        count: this.state.count + 1,        
        goCheckArr: myArr
      });
    }; 

    myGOcheck = () => {
      const arr = [];
      console.log(this.state.goCheckArr, arr)
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



  render() {
    return (
      <Wrapper>
        <Title>Click Count: {this.state.count}</Title>
        {this.state.isGameOver ?
        <div></div> : 
        (         
          this.state.characters.map(character => (
          <CharacterCard
            saveClick={this.saveClick}
            checkCount={this.checkCount}
            fromChild={this.fromChild}
            
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
    );
  }
}


export default App;
