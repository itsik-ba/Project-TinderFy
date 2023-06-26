import PrefferanceModel from "../prefferanceUser/prefferanceModel";
import Prefferance from "../prefferanceUser/prefferanceModel";
import UserModel from "../users/usersModel";

export const addNewuserPrefferance = async (req: any, res: any) => {
  try {
      const {
        minHeight,
        maxHeight,
        minAge,
        maxAge,
        bodyType,
        gender,
        kids,
        smoking,
        education,
        relationship,
        religious,
      } = req.body;
      const userId= getUserId(req,res);
    const userPreffer = await PrefferanceModel.create({
      minHeight,
      maxHeight,
      minAge,
      maxAge,
      bodyType,
      gender,
      kids,
      smoking,
      education,
      relationship,
      religious,
      userId
    });
    console.log("prefferance added");
    res.status(201).send({ ok: true });
  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res
        .status(409)
        .send({ ok: false, error: `prefferance to this user already exists` });
    }
    console.error(error);
  }
}

export const getUserId = async (req: any, res: any) => {
  try {
    const {email} = req.body;
    const userDB = await UserModel.findOne({email});
    if (!userDB) throw new Error("no user found");
    const userId = userDB._id.toString();
    console.log(userId);
    res.send (userId);
  } catch (error){
      if ((error as { code: number }).code === 11000) {
        res
          .status(409)
          .send({ ok: false, error: `no user found` });
      }
      console.error(error);
    }
    }
