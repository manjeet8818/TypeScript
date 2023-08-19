import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
const App = () => {

    return (

        <div>
            <h1>Hello World !!</h1>
            <GuestList></GuestList>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));