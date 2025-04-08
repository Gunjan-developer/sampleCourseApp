const { Router } = require("express");
const router = Router();


// this is the User Routes 
router.post('/signup' , (req, res) => {
    // code here
});

router.get('/courses', (req, res) => {
    // code here
});

router.post('/courses/:courseId', (req, res) => {
    // code here
});

router.get('/purchasedCourses' , (req, res) => {
    // code here
});

module.exports = router;