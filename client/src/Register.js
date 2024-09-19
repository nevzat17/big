import React, { useState } from 'react';
import './Register.css'; // Stil dosyasını ekliyoruz

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada API çağrısını yapabilirsin
        console.log({ username, email, password });
    };

    return (
        <div className="register-container">
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Kullanıcı Adı</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Şifre</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
};

export default Register;
