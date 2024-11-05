const EXPRESS = require('express');
const APP = EXPRESS();

const PORT = 4000;

APP.get('/', (req, res) => {
    res.send('Hello World');
});

APP.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});