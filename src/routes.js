import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController.js";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController.js";
import { CreateProductController } from "./controllers/CreateProductController.js";
import { FindAllProductController } from "./controllers/FindAllProductController.js";

const router = Router();

const creatProduct = new CreateProductController();
const findAllProduct = new FindAllProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

router.post("/product", creatProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);

router.get("/product", findAllProduct.handle);

export {router};