import React, { Component } from "react";
import CharacterCard from "./components/characterCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
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
  console.log(this.myGOcheck(), this.myWinCheck())
}

endGame = () => {
  this.state.isGameOver ?
  console.log('nothing') :
  this.setState({ isGameOver: true }) 
  console.log(this.state)
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

    myWinCheck = () => {
      return false;
      // this.setState({
      //   myGOcheck: true
      // })
    }


  render() {
    return (
      <Wrapper>
        <Title>Click Count: {this.state.count}</Title>
        {this.state.isGameOver ?
        (
        <div>
          <Backdrop /><Modal> {this.state.goCheckArr.length === 2 ? <Win/> : <Loss/>}</Modal>
        </div> ) : 
        (         
          this.state.characters.map(character => (
          <CharacterCard
            saveClick={this.saveClick}
            checkCount={this.checkCount}
            // fromChild={this.fromChild}
            
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
