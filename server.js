const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hej från Node.js i Docker via WSL!');
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
