import { models, model, Schema } from "mongoose";
import * as moment from "moment-timezone";
const IndiaTime = moment.tz(Date.now(), "Asia/Kolkata");

const ORGANIZATION_INFO = new Schema({
  ORGANIZATION_NAME: String,
  ORGANIZATION_TYPE: String,
  ORGANIZATION_CONTACT_PERSON: {
    NAME: String,
    DESIGNATION: String,
  },
  ORGANIZATION_ADDRESS: String,
  ORGANIZATION_EMAIL: String,
  ORGANIZATION_PHONE_NUMBER: Number,
  SUBMISSION_DATE: {
    type: Date,
    default: IndiaTime,
  },
  FORWARDED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
  },
  ACCEPTED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
  },
  REJECTED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
    REASON: String,
  },
});

const ACCEPTED_ORGANIZATION_INFO =  new Schema({
  ORGANIZATION_NAME: String,
  ORGANIZATION_TYPE: String,
  ORGANIZATION_CONTACT_PERSON: {
    NAME: String,
    DESIGNATION: String,
  },
  ORGANIZATION_ADDRESS: String,
  ORGANIZATION_EMAIL: String,
  ORGANIZATION_PHONE_NUMBER: Number,
  SUBMISSION_DATE: {
    type: Date,
    default: IndiaTime,
  },
  FORWARDED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
  },
  ACCEPTED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
  },
  REJECTED_BY: {
    EMP_CODE: Number,
    NAME: String,
    DATE: Date,
    REASON: String,
  },
  REFERENCE_NUMBER: Number,
  EMAIL_SENT: Boolean,
});

const StudentSchema = new Schema({
  REGNO: {
    type: Number,
    required: true,
    unique: true,
  },
  NAME: String,
  CGPA: Number,
  PASSWORD: String,
  CURRENT_SEMESTER: Number,
  EMAIL: String,
  MOBILE_NUMBER: Number,
  SECTION: String,
  BRANCH: String,
  SELF_MAJOR_PROJECT: Boolean,
  ORGANIZATIONS: [ORGANIZATION_INFO],
  RECOMMENDED_ORGANIZATIONS: [ORGANIZATION_INFO],
  ACCEPTED_ORGANIZATIONS: [ACCEPTED_ORGANIZATION_INFO],
  REJECTED_ORGANIZATIONS: [ORGANIZATION_INFO],
  GROUP_ID: Number,
  JOINED_ORGANIZATION: {
    NAME: String,
    DATE_OF_JOINING: String,
    ADDRESS: String,
    GUIDE: String,
    GUIDE_EMAIL: String,
    GUIDE_MOBILE: String,
    THROUGH_TNP: Boolean,
    ADDED_BY: {
      TEAM_LEAD: String,
    },
  },
  INTERNSHIP_DETAILS: {
    APPROVED: Boolean,
    ORGANIZATION_NAME: String,
  },
  INHOUSE_DETAILS: {
    FIELD_OF_INTEREST_1: String,
    FIELD_OF_INTEREST_2: String,
    FIELD_OF_INTEREST_3: String,
    FIELD_OF_INTEREST_4: String,
    REJOIN_SUBJECTS_TOTAL: Number,
    REJOIN_SUBJECTS: [String],
  },
  INTERNAL_GUIDE_EMAIL: String,
  INTERNAL_SESSION: [
    {
      SYNOPSIS_PROPOSAL_ACCEPTED: Boolean,
      COMMENTS: String,
      DATE: String,
    },
  ],
  REFERENCE_NUMBER: Number,
});

const StudentModel =
  models.Student ||
  model("student", StudentSchema, "major-project-details");

export default StudentModel;

