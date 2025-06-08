import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import {connectToDb} from "./lib/db.js"
import cookieParser from 'cookie-parser';

connectToDb();
dotenv.config()
const app = express()

app.use(cookieParser());
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

app.use('/api/message', messageRoutes)
app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`\nExample app listening on port ${port}`)
})
