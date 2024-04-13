import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Login from '../App/login';
import { login } from '../CommonFunctions/ReqresService';

// Mock the login function
jest.mock('../CommonFunctions/ReqresService');

describe('Login Component', () => {
    it('submits the form and logs in successfully', async () => {
        // Mock the login response
        const loginResponse = { token: 'fakeToken' };
        login.mockResolvedValue(loginResponse);

        // Render the Login component
        render(<Login />);

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Email:-'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password:-'), { target: { value: 'password123' } });

        // Simulate form submission
        fireEvent.click(screen.getByText('Continue'));

        // Wait for the login function to be called
        await waitFor(() => {
            expect(login).toHaveBeenCalledTimes(1);
            expect(login).tohavebeencalledwith('test@example.com', 'password123');
        });

        // Assert that user is redirected after successful login
        expect(window.location.pathname).toBe('/'); // Assuming navigation to "/" after successful login
    });

    it('displays error message on login failure', async () => {
        // Mock the login function to throw an error
        const errorMessage = 'Invalid credentials';
        login.mockRejectedValue(new Error(errorMessage));

        // Render the Login component
        render(<Login />);

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Email:-'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password:-'), { target: { value: 'wrongpassword' } });

        // Simulate form submission
        fireEvent.click(screen.getByText('Continue'));

        // Wait for the error message to be displayed
        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });

        // Assert that user remains on the login page after login failure
        expect(window.location.pathname).not.toBe('/'); // Assuming no navigation on login failure
    });
});