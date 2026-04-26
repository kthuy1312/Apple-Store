import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from 'config/client'

const postUpdateProfile = async (req: Request, res: Response) => {
    try {

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const userId = req.user.id;
        const { name, phone, address } = req.body;

        const updateData: any = { name, phone, address };

        if (req.file) {
            updateData.avatar = req.file.filename; // lưu filename vào DB
        }

        const user = await prisma.user.update({
            where: { id: userId },
            data: updateData,
        });

        res.json({
            success: true,
            message: "Profile updated successfully",
            user,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Error updating profile",
            error: err.message,
        });
    }
};



export {
    postUpdateProfile
}