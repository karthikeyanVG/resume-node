const express = require("express");
const users = express.Router();

const UserController = require('../Controller/user.controller')
const ResumeController = require('../Controller/resume.controller')

//user
users.post("/register", UserController.register);
users.post('/login', UserController.login)

//resume
users.post('/create', ResumeController.create);
users.post('/getResume', ResumeController.getResume);
users.put('./editResume/:id', ResumeController.update);
users.delete('./delete/:id', ResumeController.delete);


module.exports = users;