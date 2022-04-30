import { prisma } from "../database/prismaClient.js";

export class CreateProductController {
    async handle(req,res){
        const{name, bar_code, price} = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                bar_code,
                price
            }

        })
        return res.json(product);

    }
}