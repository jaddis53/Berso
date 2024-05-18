const { Category } = require("../models/category")

exports.addCategory=async(req,res)=>{
    const {name,description}=req.body.category
console.log("name and the description",name,"  ",description)
    try{
        const newCategory= await Category({

            name:name,
            description:description

        })
        newCategory.save()
        return res.json({success:true,message:"category successfully created"})
    }catch{
        (err)=>{if(err){console.log(err)}}
    }
}

exports.fetchAll=async(req,res)=>{

   const categories= await Category.find()
   try {
     res.json({success:true, message:"category is fetched", category:categories})

   } catch (error) {
    if(error){console.log("the error in fetchAll category is : ",error)}
   }
}