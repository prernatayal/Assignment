import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

// Function to handle HTTP errors
const handleError = (error) => {
    console.error('Request failed:', error);
    throw error;
};

// Function to make a GET request
export const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to make a POST request
export const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to authenticate user
export const login = async (email, password) => {
    const url = `${BASE_URL}/login`;
    const data = { email, password };
    return post(url, data);
};

// Function to retrieve user data
export const signup = async (email, password) => {
    const url = `${BASE_URL}/register`;
    const data = { email, password };
    return post(url, data);
};