import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/mongodb";
import StudentModel from "../../../models/Student.model";
// ----------------------------------------------------------------------

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const moderators = StudentModel;

    const allUsers = await moderators.find();

    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
