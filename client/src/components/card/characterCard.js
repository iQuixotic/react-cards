import React, { Component } from "react";
import "./style.css";

class CharacterCard extends Component {
state = {
  countGO:0
}

isGameOver = () => {
  this.setState({ countGO: this.state.countGO + 1 });
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
