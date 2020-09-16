import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";


class Header extends Component {
  constructor() {
    super();
    console.log("construct");
  }

  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <h1 className="title">React Book</h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }

  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

  render() {
    return (
      <div>
        { this.state.isShowHeader ? <Header/> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>Hide</button>
      </div>
    )
  }
}


ReactDOM.render(<Index/>, document.getElementById("root"));