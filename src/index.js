import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = { isLike: false };
  }

  handleClickOnLikeButton() {
    this.setState({
      isLike: !this.state.isLike
    })
  }

  render() {
    const likedText = this.props.likedText || "取消";
    const unlikedText = this.props.unlikedText || "点赞";
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        { this.state.isLike ? likedText : unlikedText }
      </button>
    )
  }
}
class Index extends Component {
  render() {
    return (
      <div>
        <LikeButton likedText="已赞1" unlikedText="赞1"/>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById("root")
);