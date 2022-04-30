import { prisma } from "../database/prismaClient.js";

export class CreateCategoryController {
    async handle(req,res){
        const{name} = req.body;

        const category = await prisma.category.create({
            data:{
                name
            }
        })
        return res.json(category);
    }
 }
