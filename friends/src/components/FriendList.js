import React from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: sessionStorage.getItem('token')
        }
    });
};

class FriendList extends React.Component{
    state ={
        friends: []
    };

    componentDidMount(){
        this.getData();
        if(!sessionStorage.getItem('token')){
            console.error('Please Login!');
        }else {
            console.info('You are logged in!');
        }
    }
    getData = () => {
        const authAxios = axiosWithAuth();
        authAxios.get('api/friends')
        .then(res => {
            this.setState({friends: res.data.data});
        });
    };

    render(){
        console.log(this.state.friends);
    return(
        <h2>Friend List</h2>
        
    );
};
}
export default FriendList;