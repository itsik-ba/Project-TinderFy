import UserModel from "./usersModel";
const jwt: any = require("jwt-simple");
const secret: string | undefined = process.env.JWT_SECRET;
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export const addNewUser = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, salt);
    const userLogin = await UserModel.create({

      name, email, password: hash
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
    let { email, password } = req.body;
    password = bcrypt.hashSync(password, salt);
    const userLogin = await UserModel.findOne({ email, password })
    if (!userLogin) {
      res.status(401).send({ ok: false })
    } else {
      const token = jwt.encode(userLogin._id, secret)

      console.log(token)
      res.cookie(`${email}`, token, {
        maxAge: 9000000, httpOnly: true
      })
      res.status(200).send({ ok: true })
    }

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


export const updateDetail = async (req: any, res: any) => {
  try {
    const { age, gender, location, height, bodyType, kids, smoking, education, job, relationship, info, religious, email } = req.body
    const users = await UserModel.findOneAndUpdate({ email }, { age, gender, location, height, bodyType, kids, smoking, education, job, relationship, info, religious })

    res.status(200).json({
      status: "ok"
    })
  } catch (error) {
    console.error(error)
  }
};


export const cardUser = async (req: any, res: any) => {
  try {
    const { name, subscribed, age, gender } = req.body
    const userCard = await UserModel.find({ name, subscribed, age, gender })
    res.status(201).send({ ok: true })
    console.log(userCard)
  } catch (error) {
    console.error(error)
  }
};