import{ Component } from "react";
class ClassEvent extends Component {
    handleClick() {
        console.log("this is class based event handling");
    }
    render() {
        return(<div>
            this is basic class component
            <button onClick={this.handleClick}>Click</button>
        </div>
        );
    }
}
export default ClassEvent;