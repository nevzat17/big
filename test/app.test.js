// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Home component on the main page', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    
    // Ana sayfa (Home) bileşeninin render edildiğini kontrol et
    const homeElement = screen.getByText(/ana sayfa/i);
    expect(homeElement).toBeInTheDocument();
});

test('renders Register component on the /register route', () => {
    render(
        <MemoryRouter initialEntries={['/register']}>
            <App />
        </MemoryRouter>
    );

    // Kayıt sayfası (Register) bileşeninin render edildiğini kontrol et
    const registerElement = screen.getByText(/kayıt sayfası/i);
    expect(registerElement).toBeInTheDocument();
});
