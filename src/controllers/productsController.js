import candysDAO from "../dao/candysDao.js";

const C = console.log.bind(console.log)


export const getAllCandys=(req,res)=>{
    candysDAO.getAll()
    .then(candy=>{
        if(candy!=null){
            res.render('../src/views/index.ejs',{candy})
        }else{
            res.json({
                status:"Products not foundo"
            })
        }
    })
    .catch(err=>console.error(err))
};

export const getOneProduct=(req,res)=>{
    candysDAO.getOne(req.params.barcode)
    .then(products=>{ 
        if(products!=null){
            res.render('../src/views/update',{products})
        }else{
            res.json({
                status:"Product not foundo "
            })
        }
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}

export const insertCandy=(req,res)=>{
candysDAO.insertcandy(req.body)
.then(candys=>{
    if(candys!=null){
        res.redirect('/')//redirecciona a la raiz
    }
})
.catch(err=>{
    res.json({
        status:"Server unavailable"
    })
})
}

export const updateProduct=(req,res)=>{
    candysDAO.updateProduct(req.params.barcode,req.body)
    .then(result=>{
        if(result){
            res.redirect('/')
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}

export const deleteProduct=(req,res)=>{
    candysDAO.deleteProduct(req.params.barcode)
    .then(result=>{
        if(result){
            res.redirect('/')//redirecciona a la raiz

        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}

export const loadUpdatePage=(req,res)=>{
    res.render('../src/views/update.ejs',{products})
}

export const formInsertCandy=(req,res)=>{
    res.render('../src/views/insertCandy.ejs')
}
