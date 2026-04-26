import { getUsers } from 'controllers/admin/user-controller'
import express, { Express } from 'express'
import fileUploadMiddleware from 'src/middleware/multer'
import { verifyToken } from 'src/middleware/verifyToken'

const router = express.Router()

const webRoutes = (app: Express) => {

    //user
    router.get("/admin/users", verifyToken, getUsers)


    app.use("/", router)
}

export default webRoutes