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

    const users = await UserModel.find({})
    console.log(users)
    res.status(200).json({
      status: "ok",
      results: users.length,
      data: { data: users }
    })
  } catch (error) {
    console.error(error)
  }
}


// export const updataUser = async (req: any, res: any) => {
//   try {
//     const { age, gender, location, height, bodyType, kids, smoking, education, job, relationship, info, religious } = req.body
//     const users = await UserModel.findOneAndUpdate({ age, gender, location })
//   } catch (error) {
//     console.error(error)
//   }
// };