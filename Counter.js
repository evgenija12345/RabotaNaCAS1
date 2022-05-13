import{ Component } from "react";
class Counter extends Component {
    constructor()
    {
        super();
        this.state={
            counter : 49,
        };
    }
    increment()
    {
        this.setState({
            counter : this.state.counter+1
        });
    }
    decrement()
    {
        this.setState({
            counter : this.state.counter-1
        })
    }
    render()
    {
        return(<div>
            <h3>Counter value is:{this.state.counter}</h3>
            <button onClick={()=>this.increment()}>Zgolemi Vrednost</button>
            <button onClick={()=>this.decrement()}>Namali Vrednost</button>
        </div>)

    }
}
export default Counter;