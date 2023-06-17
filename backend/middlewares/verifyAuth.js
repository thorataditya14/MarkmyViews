const jwt = require("jsonwebtoken");

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const verifyToken = (req, res, next) => {
    const TOKEN = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!TOKEN)
        return res.status(403).send({ MSG: "Token is required for authentication", ERR: ERR_NO_TOKEN });

    try {
        const decoded = jwt.verify(TOKEN, JWT_PRIVATE_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send({ MSG: "Token is invalid" });
    }

    return next();
};


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        const USER_IS_ADMIN = req.user.isAdmin
        const USER_IS_SELF = req.user.userid == req.params.userid

        if (USER_IS_SELF || USER_IS_ADMIN)
            return next();
        else
            return res.status(403).send({ MSG: "Not allowed, user needs to be Authorised" });
    });
};


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        const USER_IS_ADMIN = req.user.isAdmin

        if (USER_IS_ADMIN)
            return next();
        else
            return res.status(403).send({ MSG: "Not allowed, user needs to be Admin" });
    });
};


module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
};