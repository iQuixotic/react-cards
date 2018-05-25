import React, { Component } from "react";
import "./CharacterCard.css";

class CharacterCard extends Component {
constructor(props){
  super(props)
}
state = {
  count:0
}

isGameOver = () => {
  this.setState({ count: this.state.count + 1 });
  if(this.state.count>0){
    console.log('Game Over from char')
  } else {
    console.log('Not Game Over')
  }
}

render() {
  return(
  <div className="card">
    <div className="img-container" onClick={() => this.props.saveClick(this.props.id)}>
      <img onClick={() => this.isGameOver(this.props.id)} alt={this.props.name} src={this.props.image}  />
    </div>
  </div>
  )
}
}
export default CharacterCard;
