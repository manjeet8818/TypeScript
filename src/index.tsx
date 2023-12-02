import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
const App = () => {

    return (

        <div>
            <h1>Hello World !!</h1>
            <h1>
                Manjeet Dahiya is the most amazing person ever
            </h1>
            <GuestList />

            <UserSearch />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));