const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ ip });
});

app.get('/api/date', (req, res) => {
  const currentDate = new Date().toDateString();
  res.json({ date: currentDate });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

