import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';
import {IUserDetail} from "./Interfaces";
import {getUserDetails} from "./service";


const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUserDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            getUserDetails(userId)
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            console.error('User ID is undefined');
            setLoading(false);
        }
    }, [userId]);

    if (loading) {
        return <p>Loading user details...</p>;
    }

    if (!user) {
        return <p>No user details available.</p>;
    }

    return (
        <div id={'boxDetails'}>
            <BackButton />
            <div>
                <h1>User Information</h1>
                <p>ID: {user.id}</p>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Maiden Name: {user.maidenName}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Username: {user.username}</p>
                <p>Password: {user.password}</p>
                <p>Birth Date: {user.birthDate}</p>
                <img src={user.image} alt="User" />
                <p>Blood Group: {user.bloodGroup}</p>
                <p>Height: {user.height}</p>
                <p>Weight: {user.weight}</p>
                <p>Eye Color: {user.eyeColor}</p>
                <p>Hair Color: {user.hair?.color}</p>
                <p>Hair Type: {user.hair?.type}</p>
                <p>Domain: {user.domain}</p>
                <p>IP: {user.ip}</p>
                <p>Address: {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>
                <p>Geo Location: Latitude {user.address?.geolocation?.lat}, Longitude {user.address?.geolocation?.long}</p>
            </div>
        </div>
    );
};

export default UserDetail;