import candys from '../models/candyModel.js'

const C = console.log.bind(console.log)
const candysDAO={}
candysDAO.getAll = async()=>{
    const candy=await candys.find()
    return candy
}

candysDAO.getOne = async(barcodeCandy)=>{
    const candys=await candys.findOne({barcode:barcodeCandy})
    return candys
}

candysDAO.insertcandy=async(candy)=>{
    const candysaved=new candys(candy)
    await candysaved.save()
    return true
}

candysDAO.updatecandys=async(barcodeCandy,candy)=>{
    const candyUpdated=await candys.findOneAndUpdate({barcode:barcodeCandy},candy)
    if(candyUpdated!=null){
        return true
    }else{
        return false
    }

}

candysDAO.deletecandy=async(barcodeCandy)=>{
    const candyDeleted=await candys.findOneAndDelete({barcode:barcodeCandy})
    if(candyDeleted!=null){
        return true
    }else{
        return false
    }
}

export default candysDAO;