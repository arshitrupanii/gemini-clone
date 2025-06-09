import express from "express"
import dotenv from "dotenv"
import messageRoutes from "./routes/message.routes.js"
import cors from "cors"

dotenv.config()
const app = express()

app.use(cookieParser());
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

app.use('/message', messageRoutes)

app.listen(port, () => {
  console.log(`\nExample app listening on port ${port}`)
})
