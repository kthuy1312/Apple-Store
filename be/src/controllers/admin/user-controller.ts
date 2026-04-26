import { prisma } from 'config/client'
import { Response, Request } from 'express'
import { getAllUser } from 'services/admin/user-service'



const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUser();
        res.status(200).json({
            message: "Lấy danh sách tất cả user thành công",
            data: users,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi lấy tất cả user",
            error: err.message,
        });
    }
}


export {
    getUsers
}