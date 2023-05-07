import UserModel from "./usersModel";


export const userLogin = async (req:any, res:any) => {
 
      const {name, password} = req.body;
       console.log(req.body)

       const userLogInfo = await UserModel.findOne({name, password})
       if(userLogInfo)
       res.cookie("user", userLogInfo._id,{
         maxAge:9000000, httpOnly:true})
     
         res.status(201).send({ok:true})
        }
  
//   export const getUser = async (req:any, res:any) =>{
//       try {
//         const { user } = req.cookies; 
        


//       } catch (error) {
//          console.error(error)
//       }
//   }