const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('🚀 CI/CD Node App Running Successfully!');
});

// Health check route
app.get('/health', (req, res) => {
    res.json({ status: 'UP', time: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
