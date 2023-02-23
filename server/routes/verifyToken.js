const jwt = require("jsonwebtoken");


const verify  = (req,res,next) => {
  let decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded){
    return res.status(401).send()
  }else{
    req.body.user_id = decoded.user_id
    req.body.isAdmin = decoded.isAdmin
    next();
  }
}