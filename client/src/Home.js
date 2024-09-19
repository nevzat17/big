import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>DevOps Hakkında</h1>
            <p>
                DevOps, yazılım geliştirme (Dev) ile bilgi teknolojisi (Ops) süreçlerini birleştiren bir yöntemdir.
            </p>
            <Link to="/register">
                <button style={{ padding: '10px 20px', marginTop: '20px' }}>
                    Kayıt Ol
                </button>
            </Link>
        </div>
    );
};

export default Home;
