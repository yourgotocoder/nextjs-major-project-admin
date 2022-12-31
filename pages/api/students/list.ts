import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/lib/mongodb";
import StudentModel from "../../../db/models/Student.model";
// ----------------------------------------------------------------------

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const students = StudentModel;

    const allUsers = await students.find();

    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
