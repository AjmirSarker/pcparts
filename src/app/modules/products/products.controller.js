import { AllProductsService } from "./products.service"

const getProducts= async (req,res)=>{
    const products= await AllProductsService.getProducts();
    res.send(products);
}


export const AllProductsController ={
    getProducts
}