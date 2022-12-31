import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/lib/mongodb";
import ModeratorModel from "../../../db/models/Moderator.model";

// ----------------------------------------------------------------------

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    dbConnect();
    const moderators = ModeratorModel;

    const allUsers = await moderators.find();

    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
