import React from 'react';

class Clicker extends React.Component {
    constructor(props) {
      super(props);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.state = {
          count : 0
      }
    }
    counter = 0;
    increment() {
      this.setState( (prevState) =>{return {count: prevState.count + 1}});
      console.log(this.state.count)
    }
    decrement() {
        this.setState( (prevState) => {return {count: prevState.count - 1}});
        console.log(this.state.count)
    }
  
    render() {
      return (
        <>
          <button onClick={this.increment}>
            increment
          </button>
          <button onClick={this.decrement}>
            decrement
          </button>
        </>
      )
    }
  }

export default Clicker;