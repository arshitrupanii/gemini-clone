import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/message.routes.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
