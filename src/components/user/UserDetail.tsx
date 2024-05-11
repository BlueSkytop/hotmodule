import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from './BackButton';

interface IUserDetail {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: string;
    weight: string;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    domain: string;
    ip: string;
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
}

const UserDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUserDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${userId}`)
            .then(response => {
                console.log(response.data);
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
                setLoading(false);
            });
    }, [userId]);

    if (loading) {
        return <p>Loading user details...</p>;
    }

    if (!user) {
        return <p>No user details available.</p>;
    }

    return (
        <div>
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