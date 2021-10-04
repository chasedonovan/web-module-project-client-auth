import React from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';

import NewFriends from './NewFriends'

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res=> {
            this.setState({
                friends: res.data
            })
        })
        .catch(err=> {
            console.log(err);
        });
    }

    render(){
        return(
            <div>
                { 
                this.state.friends.map(friend=>(
                    <div key={friend.id} style={{ border:'1px solid black', margin:'40px 200px'}}>
                        <h2>Name: {friend.name}</h2>
                        <h3>Age: {friend.age}</h3>
                        <p>Email: {friend.email}</p>
                    </div>
                ))
                }
                <NewFriends getData={this.getData}/>
            </div>
        );
    }
}
export default FriendsList 