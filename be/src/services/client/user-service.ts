import { prisma } from "config/client"


//wishlist
const fetchWishList = async (userId: number) => {

    return await prisma.wishlist.findMany({
        where: {
            user_id: userId
        },
        include: {
            product: {
                include: {
                    category: true
                }
            }
        }
    })

}

export {
    fetchWishList
}