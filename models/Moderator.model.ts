import { models, model, Schema } from "mongoose";

const ModeratorSchema: Schema = new Schema({
  EMP_CODE: {
    type: Number,
    required: true,
    unique: true,
  },
  PASSWORD: {
    type: String,
    required: true,
  },
  NAME: {
    type: String,
    required: true,
  },
  ROLE: {
    type: String,
    required: true
  },
  DESIGNATION: {
    type: String,
    required: true
  },
  EMAIL: {
    type: String,
    required: true
  },
  MOBILE_NUMBER: Number
});

const ModeratorModel = models.Moderator || model("moderator", ModeratorSchema, "major-project-moderator");

export default ModeratorModel;
