import express, { Response } from 'express';
import connectDB from "../config/db";
import cors from 'cors';


const app = express();

export function handleError(error: any, res: Response) {
  console.error(error.message);
  res.status(500).json({ msg: 'Server Error' });
}

//connect to the db
connectDB();

// add the middleware
app.use(express.json());
app.use(cors())


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
