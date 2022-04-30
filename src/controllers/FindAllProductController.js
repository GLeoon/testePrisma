import { prisma } from "../database/prismaClient.js";

export class FindAllProductController {
    async handle(req,res){
        const{name, bar_code, price} = req.body;

        const product = await prisma.product.findMany();

        return res.json(product);

    }
}