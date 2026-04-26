import { OrderStatus } from "@prisma/client";
import { prisma } from "config/client";

const getAllOrder = async () => {
    return await prisma.order.findMany(
        { include: { user: true } }
    );
}

const handleUpdateStatusOrder = async (status: OrderStatus, orderId: number) => {
    return await prisma.order.update({
        where: {
            order_id: orderId
        },
        data: {
            status: status
        }
    })
}

export { getAllOrder, handleUpdateStatusOrder }