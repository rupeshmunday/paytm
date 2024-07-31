const express = require("express");
const db = require('./db.js');
const port = 3000;
const rootRouter = require('./routes/index.js');
const app = express();
const handleError = require('./middlewares/handleError.js')
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/v1", rootRouter);

app.use(handleError);

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
}); 