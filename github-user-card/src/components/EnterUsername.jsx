import React from "react";

class EnterUsername extends React.Component {
    formSubmit = click => {
        click.preventDefault()
        this.props.toggleFormSubmit()
    }

    render () {
        return (
            <form className="enter-username-form" onSubmit={this.formSubmit}>
                <h1>Enter Your Github Username</h1>
                <input
                    type="text"
                    value={this.props.username}
                    onChange={this.props.updateUsername}
                    placeholder="type your username here"
                />
                <button type="submit">Get User Info</button>
            </form>
        );
    }
}

export default EnterUsername;