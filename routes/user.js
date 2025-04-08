const { Router } = require("express");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const router = Router();


// this is the User Routes 
router.post('/signup', (req, res) => {
    // code here
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    });

    res.json({
        msg: "User created Successfully"
    })
});

router.get('/courses', async (req, res) => {
    // code here
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // code here
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        await User.updateOne(
            {
                username: username
            },
            {
                "$push" : {
                    purchasedCourses: courseId
                }
            }
        )
    }
    catch(err) {
        console.log(err.stack);
    }
    res.json({
        msg: "Purchase complete !!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // code here

    const user = await User.findOne({
        username: req.headers.username
    });

    console.log("the value is :", user.purchasedCourses);
    const courses =  await Course.find({
        _id: {
            "$in" : user.purchasedCourses
        }
    })
    res.json(
        {
            courses: courses
        }
    )
    
});

module.exports = router;