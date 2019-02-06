const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const { getChars } = require("./controller/swapiCtrl")


const app = express();
app.use(cors());
app.use(json());

app.get('/api/characters', getChars)

app.listen(port, () => console.log(`listening at port ${port}`));