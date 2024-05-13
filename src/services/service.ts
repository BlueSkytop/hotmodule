import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getUserDetails = async (userId: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};