import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, updateProduct, loadUpdatePage } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllProducts)
router.get('/:barcode',getOneProduct)
router.post('/',insertProduct)
router.post('/:barcode',updateProduct)
router.get('/delete/:barcode',deleteProduct)

router.get('/:barcode')



export default router
