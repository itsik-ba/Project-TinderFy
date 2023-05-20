import UserModel from "./usersModel";
const jwt: any = require("jwt-simple");
const secret: string | undefined = process.env.JWT_SECRET;


export const addNewUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const userLogin = await UserModel.create({
      name, email, password
    })
    console.log(userLogin)
    res.status(201).send({ ok: true })

  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res.status(409).send({ ok: false, error: `user already exists` });
    }
    console.error(error)
  }

}

export const userLogin = async (req: any, res: any) => {
  try {
    const { name, password } = req.body;
    const userLogin = await UserModel.findOne({ name, password })
    if (!userLogin) throw new Error("user name or password is not Valid")
    if (!secret) throw new Error("cant find jwt secret")
    const token = jwt.encode(userLogin._id, secret)
    console.log(token)
    res.cookie(`${name}`, token, {
      maxAge: 9000000, httpOnly: true
    })
    res.status(200).send({ ok: true })

  } catch (error) {
    console.error(error)
  }
}

export const getAllUsers = async (req: any, res: any) => {
  try {

      } catch (error) {
        console.error(error)
      }
   }


export const updataUser = async (req:any, res:any) => {
      try {
        const {age, gender, location, height, bodyType, kids, smoking, education, job, relationship, info, religious } = req.body
        const users = await UserModel.findOneAndUpdate({age, gender, location})
         
       











