const { Router } = require('express');
const { Admin, Course } = require('../db');
const adminMiddleware = require('../middleware/admin');
const router = Router();


// Admin Routes 
router.post('/signup', async (req, res) => {
    // code here

    const username = req.body.username;
    const password = req.body.password;


    // check if a user with this username already exists 
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware , async (req, res) => {
    // code here
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

   const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id,
    })
});

router.get('/courses',  adminMiddleware , async (req, res) => {
    // code here
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    })
});

module.exports = router;