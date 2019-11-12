//Not protected/private
//login in form that displays links to login and signupForm
//inputs for username and PW
//Login button
//The login function should save the returned token to localStorage. You can setup isLoading state in your Login component, and show a spinner on your form or in your button while the login request is happening.
//When the request returns, save the token to localStorage, then use the history object in your Login component to navigate your user to your FriendsList route.
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoggedIn: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('/api/login', this.state.credentials)
            .then(res => {
                console.log('Response', res);
                const {data} = res;

                sessionStorage.setItem('token', data.payload);
                this.setState({...this.state, isLoggedIn: true});
            })
    }

    render() {
        return (
            <div>
                <h2>{this.state.isLoggedIn ? "LOGGED IN! Proceed to Friends" : "Please login"}</h2>
                <form onSubmit={this.login}>
                    <input type='text' name='username' value={this.state.credentials.username}
                    onChange={this.handleChange}/>
                    <input type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}/>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}
export default Login;
