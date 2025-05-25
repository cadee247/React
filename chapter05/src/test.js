import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            fruits: ["Apple", "Banana", "Kiwi", "Orange", "Grapes"]
        };
    }

    render() {
        return (
            <div>
                <h1>Fruit List</h1>
                
                
                {this.state.fruits.length > 0 && (
                    <ul>
                        {this.state.fruits.map((fruit, index) => (
                            <li key={index}>{fruit}</li>
                        ))}
                    </ul>
                )}

                
                {this.state.fruits.length === 0 && <h2>No fruits available.</h2>}
            </div>
        );
    }
}

export default Test;