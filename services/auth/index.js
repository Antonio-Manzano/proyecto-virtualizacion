const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 
        status: "Online", 
        service: "Auth & Identity", 
        version: "1.0.2",
        message: "Bienvenido al sistema de autenticación de Art-Platform"
    });
});

app.post('/login', (req, res) => {
    const { user } = req.body;
    res.send({ message: `Sesión iniciada para ${user}`, token: "jwt-token-pro-123" });
});

app.listen(PORT, () => console.log(`Auth Service en puerto ${PORT}`));