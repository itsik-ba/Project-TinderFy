import UserModel from "./usersModel";


export const addNewUser = async (req:any, res:any) => {
   try {
     const { name, email, password } = req.body;
     const userLogin = await UserModel.create({
      name, email, password })
      console.log(userLogin)
     res.status(201).send({ok:true})

     } catch (error) {
      console.error(error)
   }  

 }

export const userLogin = async (req:any, res:any) => {
 
      const {name, password} = req.body;
       console.log(req.body)

       const userLogInfo = await UserModel.findOne({name, password})
       if(userLogInfo)
       res.cookie("user", userLogInfo._id,{
         maxAge:9000000, httpOnly:true})
     
         res.status(201).send({ok:true})
        }













  
