import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    }

    handleIncrement = () =>{
        console.log("Increment Clicked", this);
    }
    render() { 
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement()} className='btn btn-secondary btn-sm'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;