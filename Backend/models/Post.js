const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    jobDesc: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
    },
    company:{
      type:String,
      required:true,
    },
    interviewDate:{
      type:Date,
      require:true,
    },
    onCampus: {
      type: Boolean,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    postHTML: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
