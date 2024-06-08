import StudentModel from "../models/studentSchema.js";

const editController = async(req,res)=>{
    try{
        //  console.log(req.params.id);

        const record = await StudentModel.findById({'_id':req.params.id})
        if(record){
            res.render('edit', {'record':record})
        }else{
            res.render('edit')
        }
    } catch (error) {
        console.log(error.message)
    }
}

//  UPDATE Controller

const updateController = async(req,res)=>{
    try{
        const updatedRecord = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
        if(updatedRecord){
            res.redirect('/')
        }else {
            res.redirect('read')
        }
    } catch(error) {
        console.log(error.message)
    }
}
 
//  DELETE Controller

const deleteController = async(req,res)=>{
    try{
        const deleterecord = await StudentModel.findByIdAndDelete(req.params.id)
        if(deleterecord){
            res.redirect('read')
        }else{
            res.redirect('/')
        }
    }catch(error) {

    }
}

export {editController, updateController, deleteController}
