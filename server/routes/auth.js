const express=require("express");
const router = require("express").Router();
const { Project } = require("../models/Project");
const Profile = require("../models/Profile");

exports.createProject = async (req, res) => {
  try {
    const existing = await Project.findOne({ name: req.body.name });
    if (existing) {
      return res.status(400).json({ message: "Project with this title already exists." });
    }

    const newProject = await Project.create(req.body);
    res.status(201).json({ message: "Project created successfully", data: newProject });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProjectByTitle = async (req, res) => {
  try {
    const name = req.body.name;

    const updated = await Project.findOneAndUpdate(
      { name },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Project with this title not found." });
    }
    console.log("Request body:", req.body);

    res.json({ message: "Project updated successfully", data: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {

  try {
    let profile = await Profile.findOne();
    if (!profile) {
      // Create default profile if none
      profile = new Profile({
        personal_details: [{
          full_name: "Sushant Sanjay Ambekar",
          email: ["sushantsambekar@gmail.com", "23030151@ycce.in"],
          diploma_branch: "Information Technology",
          btech_branch: "Computer Science & Engineering",
        }],
        qualifications: [{
          ssc: "90.80%",
          diploma: "88%",
          SGPA: [8.66, 8.80, 8.99],
          cgpa: "8.82",
        }],
        achievements: [
          "1st Rank in Final Projects in Diploma or Capstone Project Execution.",
          "2nd Rank in Diploma in IT in Government Polytechnic Nanded.",
          "4th Rank in Smackathon in Upsurge Event, YCCE-23.",
          "One of the top 10 rankers (CGPA) in Academics.",
        ],
        certifications: [
          "IBM Cloud Certification",
          "Kalavati Technologies Internship Certification",
          "Web Development (Udemy)",
          "DevOps Certification (Coursera)",
        ],
        skills: [
          "Java",
          "Python",
          "MERN Stack",
          "WordPress",
          "Tailwind CSS",
          "MySQL",
          "Firebase",
          "Android using Java",
          "IBM Cloud",
        ],
      });
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

}

exports.updateProfile = async (req, res) => {

  try {
      let profile = await Profile.findOne();
      if (!profile) {
        profile = new Profile(req.body);
      } else {
        // Update whole profile with new data (you can customize for partial update)
        Object.assign(profile, req.body);
      }
      await profile.save();
      res.json(profile);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }


}


// module.exports = router;