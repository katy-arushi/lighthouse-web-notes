import {Component} from "react";


class ClassBasedCounter extends Component{

    constructor(){
        super();
        this.state = {
            counter : 0,
            secretMessage : ""
        };

        this.increase = this.increase.bind(this);
    }


    increase(){
        this.setState({ counter : this.state.counter + 1, secretMessage : this.props.secretMessage})
    }

    render(){
        return (
            <div>
                <h2>Class based Counter</h2>
                <h1>Don't forget to {this.state.secretMessage}</h1>
                <h2>Initial Value : {this.props.startFrom}</h2>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }



}

export default ClassBasedCounter;