import db from "../../../db";
import userModel from "../../../models/user.m";
export default async function handler(req, res) {
  try {

    await db();

    const data = await userModel.find({});
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'Fail',
      error: 'Unable to connect to the database or fetch data',
    });
  }
}
