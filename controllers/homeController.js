import StudentModel from "../models/studentSchema.js";

const homeController = async(req,res)=>{

    res.render('index')
};

//   >>>   Create

const createController = async(req,res)=>{
    //  console.log(req.body)
    const record = await StudentModel ({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        contact:req.body.contact,
    });
    if(record){
        await record.save();
        console.log("Data Saved....!");
    }else{
        console.log("Data Not Saved....!")
    }
    res.render('index')
}

export {homeController, createController}