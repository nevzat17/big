const express = require('express');
const sequelize = require('./db'); // Veritabanı bağlantısını ekle

const app = express();
const PORT = 5000;

app.use(express.json());

// Basit bir rota örneği
app.get('/', (req, res) => {
    res.send('DevOps Backend API');
});

// Veritabanı bağlantısını kontrol et
sequelize.authenticate()
    .then(() => {
        console.log('Veritabanı bağlantısı başarılı.');
    })
    .catch(err => {
        console.error('Veritabanı bağlantısı başarısız:', err);
    });

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
