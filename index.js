import auth from './auth/AuthenticationManager.js';
import fileUploader from './controller/FileUploadController.js';
import adminPanel from './controller/AdminPanelController.js'
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;
config();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));


var corsOptions = {
    origin: `http://${process.env.FRONTEND_URL}`,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use("/api/login", auth);
app.use("/api/venus", fileUploader)
app.use("/api/venus/admin", adminPanel)

app.listen(port, () => {
  console.log('Expecting frontend to be hosted at: http://' + process.env.FRONTEND_URL);
  console.log('Will try to contact the backend at: http://' +  process.env.API_URL);
  console.log(`Example app listening on port ${port}!`)
});
