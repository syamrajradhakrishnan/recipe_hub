import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://syamrajradhakrishnan:5bGPh1kRhtmtuiT4@recipehub.hik9uh7.mongodb.net/recipehub?retryWrites=true&w=majority");

app.listen(3001, () => console.log("SERVER STARTED!"));