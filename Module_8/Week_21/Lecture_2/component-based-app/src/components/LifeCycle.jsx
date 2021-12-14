import { Component } from "react";


class LifeCycle extends Component{

    constructor(){
        super();
        this.state = {
            value: "",
            intervalId: 0
        };
    }

    // useEffect( () => {}, [])
    componentDidMount(){
        console.log("Component mounted!");
        this.state.intervalId = setInterval(() => {console.log("intval called!")}, 1000); 
        
        
    }

    // useEffect(() => {}, [UserID])    
    componentDidUpdate(prevProps, prevState){
        // if(prevState.UserID !== this.state.UserID)
        // {

        // }
        console.log("Component updated!");

    }

    componentWillUnmount(){
      console.log("Component will Umnount!");  
      clearInterval(this.state.intervalId);
    }

    render(){
        return(
            <div>
                <h2>Lifecycle Component</h2>
                <input type="text" value={this.state.value} 
                       onChange={event => this.setState({value: event.target.value})} />
            </div>
        )
    }

}

export default LifeCycle;