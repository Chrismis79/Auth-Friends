//this component renders sign up form with links like loggin form
//Not protected/private
import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import '../App.css';

const SignupForm = props => {
    console.log(props)
    const handleChange = e => {
        props.setnewFriend({
            ...props.newFriend,
            [e.target.name] : e.target.value
        });
    };

    const onSubmit = e => {
        if(props.edit){
            return edit(); 
        }else {
            return add();
        }
    }
        const edit = e => {
            e.preventDefault();
            axiosWithAuth()
                .put('/friends/' + props.newFriend.id, {
                    name: props.newFriend.name,
                    age: props.newFriend.age,
                    email: props.newFriend.email
                })
                .then(res => {
                    console.log(res)
                    props.setnewFriend({
                        id: Date.now(),
                        name: '',
                        age: '',
                        email: '',
                    });
                    
                    props.setNewGet();
                    
                })
                .then(props.setEdit(false))
                .catch(err => console.log("error adding new user", err));
         
        }
        
        const add = (e) => {
            e.preventDefault();
            axiosWithAuth()
                .post('/friends', props.newFriend)
                .then(res => {
                    console.log('Add Friend', res.data);
                    props.setnewFriend({
                        id: Date.now(),
                        name: '',
                        age: '',
                        email: ''
                    })
                    props.setNewGet();
                }) 
                .catch(err => console.log('Error in adding new friend', err));
        }
        


    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* <input type='hidden' name='id' value={props.newFriend.id} /> */}
                <input type='text' name='name' value={props.newFriend.name} onChange={handleChange} placeholder='Name...' />
                <input type='text' name='age' value={props.newFriend.age} onChange={handleChange} placeholder='Age...' />
                <input type='email' name='email' value={props.newFriend.email} onChange={handleChange} placeholder='Email...' />
                {props.edit ? (
                    <button onClick={edit}>Edit Friend</button>
                ) : (
                    <button onClick={add}>Add Friend</button>
                )}
            </form>
        </div>
    )
};

export default SignupForm;