import React         from "react";
import EnterUsername from "./components/EnterUsername";
import UserCard      from "./components/UserCard";
import "./stylesheets/App.css";

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            usernameInput: "",
            formSubmitted: false,
        };
    }

    updateUsername   = input => {
        this.setState( { ...this.state.usernameInput, usernameInput: input.target.value } );
    };
    toggleFormSubmit = () => {
        this.setState( { ...this.state.formSubmitted, formSubmitted: !this.state.formSubmitted } );
    };

    render () {
        return (
            <>
                {this.state.formSubmitted === false
                 ? <EnterUsername
                     username={this.state.usernameInput}
                     updateUsername={this.updateUsername}
                     formSubmitted={this.state.formSubmitted}
                     toggleFormSubmit={this.toggleFormSubmit}
                 />
                 : <UserCard usernameInput={this.state.usernameInput}/>
                }
            </>
        );
    }
}

export default App;
