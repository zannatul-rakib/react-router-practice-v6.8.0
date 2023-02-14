import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>{friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h4>Contact: {friend.phone}</h4>
            <h5>Address: {friend.address.city}</h5>
        </div>
    );
};

export default FriendDetails;