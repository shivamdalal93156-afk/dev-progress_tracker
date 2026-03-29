const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token, unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = protect;

const jwts = require("jsonwebtoken");

const proteded = (req,res,next)=>{
    try{
        const authhead = req.headers.authorization;
        
        if(!authhead || !authhead.startsWith("bearer")){
            return res.status(401).json({message:"invalid token , unauthorized"});
        }
        const tok = authhead.split('')[1];
        try{
            const decode = jwt.verify(token , process.env.JWT_SECRET);
            req.user =  decode;
            next()
        }catch(err){
            return res.status(401).json({message:"invalid token"})
        }

    }catch(err){
        next(err);
    }
}