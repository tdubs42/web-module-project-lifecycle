import React from "react";
import "../stylesheets/UserCard.css";
import axios from "axios";

class UserCard extends React.Component {
    constructor () {
        super();
        this.state = {
            userData: [],
            additionalUserData: [],
        };
    }

    setUserData = res => {
        this.setState( { ...this.state.userData, userData: res.data } );
    };

    componentDidMount () {
        axios.get( `https://api.github.com/users/${this.props.usernameInput}` )
             .then( res => {
                 this.setUserData( res );
             } )
             .catch( err => console.error( err ) );
    }

    render () {
        return (
            <figure>
                <h1>{this.state.userData.name}</h1>
                <img src={this.state.userData.avatar_url} alt="Github profile photo"/>
                <br/>
                <a href={this.state.userData.url}>Go to their profile</a>
                <figcaption>Follower Count: {this.state.userData.followers}</figcaption>
                <a href={this.state.userData.followers_url}>Go see who's following {this.state.userData.name} on
                                                            Github</a>
                <figcaption>Following Count: {this.state.userData.following}</figcaption>
                <a href={this.state.userData.following_url}>Go see who {this.state.userData.name} is following on
                                                            Github</a>
                <figcaption>{this.state.userData.name}'s Company: {this.state.userData.company}</figcaption>
                <figcaption>
                    {this.state.userData.name}'s Bio:
                    <br/>
                    {this.state.userData.bio}
                </figcaption>
                <figcaption>Twitter Handle: {this.state.userData.twitter_username}</figcaption>
                <figcaption>User Repos</figcaption>
                <a href={this.state.userData.repos_url}>{this.state.userData.name}'s Repositories</a>
                <figcaption>User Organizations</figcaption>
                <a href={this.state.userData.organizations_url}>{this.state.userData.name}'s Organizations</a>
            </figure>
        );
    }
}

export default UserCard;