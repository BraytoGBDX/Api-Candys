import { Router } from "express";
import { deleteProduct, formInsertCandy, updateProduct, getAllCandys, insertCandy } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllCandys)
// router.get('/:barcode',getOneProduct)
router.post('/',insertCandy)
router.post('/:barcode',updateProduct)
router.get('/delete/:barcode',deleteProduct)


router.get('/insertCandy',formInsertCandy)



export default router
