const mongoose = require("mongoose");
require('dotenv').config();

const dbHost = process.env.DB_HOST;
mongoose.connect(dbHost);

const AdminSchema = new mongoose.Schema({

});

const UserSchema = new mongoose.Schema({
    // code here
});

const CourseSchema = new mongoose.Schema({
    // code here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('/Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}