import Prefferance from "../prefferanceUser/prefferanceModel";


export const userPrefferance = async (req:any, res:any)=>{
    try {
      const { height, bodyType, kids, smoking, hangout, education, job, relationship, politics, religious } = req.body;
    const userPreffer = await Prefferance.create({
        height, bodyType, kids, smoking, hangout, education, job, relationship, politics, religious })
     console.log(userPreffer)
    res.status(201).send({ok:true})

    } catch (error) {
      console.error(error)
    }
   
  }


