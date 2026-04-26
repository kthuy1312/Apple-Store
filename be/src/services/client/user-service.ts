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

const handlePostWishlist = async (userId: number, productId: number) => {
    const isExistProduct = await prisma.product.findUnique({
        where: { id: productId }
    });

    if (!isExistProduct) {
        return { status: "warning", message: "Product does not exist" };
    }

    const isExist = await prisma.wishlist.findFirst({
        where: { user_id: userId, product_id: productId }
    });

    if (isExist) {
        return { status: "warning", message: "Product is already in your wishlist" };
    }

    const newItem = await prisma.wishlist.create({
        data: { user_id: userId, product_id: productId }
    });

    return { status: "success", message: "Product has been added to your wishlist successfully" };

};

export {
    fetchWishList, handlePostWishlist
}