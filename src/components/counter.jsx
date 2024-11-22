import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    }
    render() { 
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;