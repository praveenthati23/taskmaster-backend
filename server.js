const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from backend root. Hit /api/greeting');
});

app.get('/api/greeting', (req, res) => {
  res.json({
    message: "Hello from backend",
    time: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://0.0.0.0:${PORT}`);
});
