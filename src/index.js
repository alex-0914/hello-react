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

class HelloWorld extends Component {
  constructor() {
    super();
  }

  sayHi() {
    alert("Hello World!");
  }

  render() {
    return (
      <div onClick={this.sayHi.bind(this)}>Hello World!</div>
    )
  }
}

// stateless Component
// stateful Component
const HelloWorld2 = (props) => {
  const sayHi = (event) => alert("Hello World");
  return (
    <div onClick={sayHi}>ALEX, GO, GO!</div>
  );
}
// class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       likedText: "No",
//       unlikedText: "Yes"
//     }
//   }

//   handleClickOnChange() {
//     this.setState({
//       likedText:'Follow',
//       unlikedText: "Unfollow"
//     })
//   }


//   render() {
//     return (
//       <div>
//         <LikeButton 
//           likedText={this.state.likedText}
//           unlikedText={this.state.unlikedText}
//         />
//         <div>
//           <button onClick={this.handleClickOnChange.bind(this)}></button>
//         </div>
//       </div>
//     )
//   }
// }

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },

  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]


// class User extends Component {
//   render() {
//     const { user } = this.props;
//     return (
//       <div>
//           <div>Name: {user.username} </div>
//           <div>Age: {user.age} </div>
//           <div>Gender: {user.gender} </div>
//           <hr/>
//       </div>
//     )
//   }
// }

const User = props => {
    const { user } = props;
    return (
      <div>
        <div>Name: {user.username} </div>
        <div>Age: {user.age} </div>
        <div>Gender: {user.gender} </div>
        <hr/>
      </div>
    )
  }
class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {users.map((user, i) => <User user={user} key={i}/>)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById("root")
);