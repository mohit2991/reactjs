import React, { Component } from "react";

// class based component
class ClassVsFunction extends Component {
  constructor() {
    // Calling the constructor of parent calss
    super();

    // Setting the inital state
    this.state = { number: 0 };
    // this.state = { array: [] };

    console.log(">>>>> mohit constructor()");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(">>>>> mohit getDerivedStateFromProps()");
  //   return { number: 10 };
  // }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ number: 20 });
    }, 3000);

    console.log(">>>>> mohit componentWillMount()");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ number: 50 });
    }, 5000);
    console.log(">>>>> mohit componentDidMount()");
  }

  componentDidUpdate() {
    console.log(">>>>> mohit componentDidUpdate()");
  }

  componentWillUpdate() {
    console.log(">>>>> mohit componentWillUpdate()");
  }

  increment = () => {
    const { number } = this.state;
    console.log(number);
    this.setState({ number: number + 1 });
  };

  render() {
    console.log(">>>>> mohit render()");
    const { number } = this.state;
    return (
      <>
        <div>{number}</div>
        <button onClick={this.increment}>Click</button>
      </>
    );
  }
}

export default ClassVsFunction;

// function based component
// function ClassVsFunction(){

// }

// function xyz(){

// }

// xyz()
