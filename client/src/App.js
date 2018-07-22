import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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
  // await console.log(this.myGOcheck()) :
  // await console.log(this.myGOcheck())
  this.setState({ isGameOver: true }) :
  shuffle(characters) 
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
        // return false;
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
