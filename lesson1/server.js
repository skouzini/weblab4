const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worlds\n');
});

app.get('/secret', (req, res) => {
   res.send('You have accessed a restricted domain!\n') 
});

app.get('/api/user/1', (req, res) => {
    res.send({
        name: 'Josh Skouzini',
        avatar: 'https://via.placeholder.com/300/09f/fff.png',
        role: 'admin'
    });
})

app.post('/', (req, res) => {
   res.send('Just posted!\n');
});

app.put('/', (req, res) => {
   res.send('Updated...\n');
});

app.delete('/', (req, res) => {
    res.send('All is lost...\n');
});

app.listen(3000, () => console.log('Server listening on port 3000...'));