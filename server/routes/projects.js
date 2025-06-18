const express = require('express');
const router = express.Router();
const { createProject, updateProjectByTitle,getAllProjects } = require('../routes/auth');

router.post('/', createProject);
router.put('/', updateProjectByTitle);
router.get("/",getAllProjects);

module.exports = router;