const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.json({
        msg: "Backend is ONN!!"
    })
});

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`);
})