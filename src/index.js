import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class LikeButton extends Component {
  static defaultProps = {
    likedText: "CANCEL",
    unlikedText: "Subscribe"
  }
  constructor(props) {
    super(props);
    this.state = { isLike: false };
  }

  handleClickOnLikeButton() {
    this.setState({
      isLike: !this.state.isLike
    })
    if(this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        { this.state.isLike ? this.props.likedText : this.props.unlikedText }
      </button>
    )
  }
}
class Index extends Component {
  constructor() {
    super();
    this.state = {
      likedText: "No",
      unlikedText: "Yes"
    }
  }

  handleClickOnChange() {
    this.setState({
      likedText:'Follow',
      unlikedText: "Unfollow"
    })
  }


  render() {
    return (
      <div>
        <LikeButton 
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}
        />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}></button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById("root")
);