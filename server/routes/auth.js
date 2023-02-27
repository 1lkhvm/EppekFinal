const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//REGISTER



router.post("/register", async (req, res) => {
    let { username, email, password } = req.body
    console.log("register", username, email, password)
    username = username.toLowerCase()
    let hashedPassword = await bcrypt.hash(password, 10)
    let user = new User({
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: false,
    })
    let result = await user.save()
    if (!result) {
        return res.status(500).json({ message: "Error could not register" })
    }
    let token = jwt.sign({ user_id: user._id, username: username, isAdmin: user.isAdmin, }, process.env.JWT_SEC, { expiresIn: "3d" });
    res.status(200).json({ token: token, username: username })

})





router.post("/login", async (req, res) => {
    let { username, password } = req.body

    let user = await User.findOne({ username: username })
    if (!user) {
        return res.status(401).json({ message: "User Not found" })
    }


    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(401).json({ message: "User found , but not valid Password", })
    }

    let token = jwt.sign({ user_id: user._id, username: user.username, isAdmin: user.isAdmin, }, process.env.JWT_SEC, { expiresIn: "3d" });

    res.json({ token: token, username: username })
})

module.exports = router;







// router.post("/register", async (req, res) => {
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC
//         ).toString(),
//     });

//     try {
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //LOGIN

// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne(
//             {
//                 userName: req.body.user_name
//             }
//         );

//         !user && res.status(401).json("Wrong User Name");

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.PASS_SEC
//         );


//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//         const inputPassword = req.body.password;

//         originalPassword != inputPassword &&
//             res.status(401).json("Wrong Password");

//         const accessToken = jwt.sign(
//             {
//                 id: user._id,
//                 isAdmin: user.isAdmin,
//             },
//             process.env.JWT_SEC,
//             { expiresIn: "3d" }
//         );

//         const { password, ...others } = user._doc;
//         res.status(200).json({ ...others, accessToken });

//     } catch (err) {
//         res.status(500).json(err);
//     }

// });
