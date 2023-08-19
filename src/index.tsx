import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
const App = () => {

    return (

        <div>
            <h1>Hello World !!</h1>
            <h1>
                Aakib Shah is the most amazing person ever
            </h1>
            <GuestList></GuestList>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));