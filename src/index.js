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
      isShowClock: true,
    }
  }

  componentDidMount() {
    // console.log(this.clock);
  }

  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowOrHide.bind(this)}>Hide</button>
        { this.state.isShowClock ? <Clock ref={clock => this.clock = clock}/> : null }
      </div>
    )
  }
}

class AutoFocusInput extends Component {

  componentDidMount() {
    this.input.focus();
    console.log(this.input);
  }

  render() {
    return (
      <input ref={input => this.input = input}/>
    )
  }
}

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>
          <p>Now the time is</p>
          { this.state.date.toLocaleString()}
          <hr/>
          { this.state.date.toLocaleDateString()}
          <hr/>
          { this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

class Card extends Component {

  componentDidMount() {
    console.log(this.props.children);
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          { this.props.children[0] }
        </div>
        <div className="card-content">
          { this.props.children[1] }
        </div>
        <div className="card-content">
          { this.props.children[2] }
        </div>
      </div>
    )
  }
}

class Layout extends Component {
  render() {
    return (
      <div className="two-cols-layout">
        <div className="sidebar">
          { this.props.children[0] }
        </div>
        <div className="main">
          { this.props.children[1] }
        </div>
      </div>
    )
  }
}


ReactDOM.render( 
  <Card>
    <h2>React Book</h2>
    <div>Free, Simple, Professional and Open Source</div>
    <input />
  </Card>, 
  document.getElementById("root")
);