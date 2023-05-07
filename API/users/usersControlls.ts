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
         try {
          const {name, password} = req.body;
          const userLogin = await UserModel.findOne({name, password})
          
          if(!name)throw new Error ("cant find user name")
          if(!password)throw new Error ("cant find user password")
          console.log(userLogin)
          if(userLogin)
          res.cookie("user", userLogin._id,{
            maxAge:9000000, httpOnly:true})
            res.status(201).send({ok:true})

         } catch (error) {
          console.error(error)
         }
   }













  
