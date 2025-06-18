// const express = require("express");
// const router = express.Router();
// const User = require("../models/Profile");

// // Update Emails (Personal or College, treated the same here)
// router.put("/update-email/:id", async (req, res) => {
//   try {
//     const { email } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { email });
//     res.json({ message: "Email updated" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Update CGPA
// router.put("/update-cgpa/:id", async (req, res) => {
//   try {
//     const { cgpa } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { cgpa });
//     res.json({ message: "CGPA updated" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add SGPA
// router.put("/add-sgpa/:id", async (req, res) => {
//   try {
//     const { sgpa } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { $push: { sgpa } });
//     res.json({ message: "SGPA added" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add Achievement
// router.put("/add-achievement/:id", async (req, res) => {
//   try {
//     const { achievement } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { $push: { achievement } });
//     res.json({ message: "Achievement added" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add Certification
// router.put("/add-certification/:id", async (req, res) => {
//   try {
//     const { certification } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { $push: { certification } });
//     res.json({ message: "Certification added" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add Skill
// router.put("/add-skill/:id", async (req, res) => {
//   try {
//     const { skill } = req.body;
//     await User.findByIdAndUpdate(req.params.id, { $push: { skill } });
//     res.json({ message: "Skill added" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
