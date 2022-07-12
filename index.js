const express = require('express');
const routes = require('./routes/index');

const PORT = 3000;
const app = express();

app.use(express.json({extended: true}));
app.use('', routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});