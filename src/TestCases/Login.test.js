import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Login from '../App/login';
import { login } from '../CommonFunctions/ReqresService';

jest.mock('../CommonFunctions/ReqresService');

describe('Login Component', () => {
    it('submits the form and logs in successfully', async () => {
        const loginResponse = { token: 'fakeToken' };
        login.mockResolvedValue(loginResponse);

        render(<Login />);

        fireEvent.change(screen.getByLabelText('Email:-'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password:-'), { target: { value: 'password123' } });

        fireEvent.click(screen.getByText('Continue'));

        await waitFor(() => {
            expect(login).toHaveBeenCalledTimes(1);
            expect(login).tohavebeencalledwith('test@example.com', 'password123');
        });

        expect(window.location.pathname).toBe('/');
    });

    it('displays error message on login failure', async () => {
        const errorMessage = 'Invalid credentials';
        login.mockRejectedValue(new Error(errorMessage));

        render(<Login />);

        fireEvent.change(screen.getByLabelText('Email:-'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password:-'), { target: { value: 'wrongpassword' } });

        fireEvent.click(screen.getByText('Continue'));

        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });

        expect(window.location.pathname).not.toBe('/');
    });
});