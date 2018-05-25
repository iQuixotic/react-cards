import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";
import shuffle from "shuffle-array"

class App extends Component {
  
  state = {
    characters, 
    count: 0,
  };
  

  componentDidMount(){
    console.log('I was triggered during componentDidMount');
  }

    saveClick = id => {
      this.setState({ count: this.state.count + 1 });
    
          
      shuffle(characters)
    };


    


  render() {
    return (
      <Wrapper>
        <Title>Click Count: {this.state.count}</Title>
        {this.state.characters.map(character => (
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
        ))}
      </Wrapper>
    );
  }
}


export default App;
