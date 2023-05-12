import NewCard from "../profileUser/profileModel";


export const newProfile = async (req:any, res:any)=>{
    try {
      const { name, age, gender, location, height, weight, kids, intrested, info } = req.body;
    const userProfile = await NewCard.create({
     name, age, gender, location, height, weight, kids, intrested, info})
     console.log(userProfile)
    res.status(201).send({ok:true})

    } catch (error) {
      console.error(error)
    }
   
  }


