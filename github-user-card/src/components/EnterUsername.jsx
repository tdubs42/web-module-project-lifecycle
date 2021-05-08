import React from "react";
import '../stylesheets/EnterUsername.css';

class EnterUsername extends React.Component {
    formSubmit = click => {
        click.preventDefault()
        this.props.toggleFormSubmit()
    }

    render () {
        return (
            <div className='gradient-border'>
            <form className="enter-username-form" onSubmit={this.formSubmit}>
                <h1 className='enter-username-header'>Enter Your Github Username</h1>
                <input
                    className="enter-username-input"
                    type="text"
                    value={this.props.username}
                    onChange={this.props.updateUsername}
                    placeholder="username"
                />
                <button className='enter-username-submit-btn' type="submit">Get Info</button>
            </form>
            </div>
        );
    }
}

export default EnterUsername;