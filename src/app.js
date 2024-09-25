import express from "express";
import cors from 'cors';
import Routes from './routes/index.js';
import { conectionDB } from "./db_connection.js";

const app = express();

conectionDB();

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',Routes);
