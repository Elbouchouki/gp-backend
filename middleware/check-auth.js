const jwt = require("jsonwebtoken");
const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "" + process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (e) {
    return res.status(401).json({
      message: "invalide or expired token",
      details: e,
    });
  }
};
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(401).json({
        message: "user not allowed",
      });
    } else {
      next();
    }
  };
};

module.exports = {
  checkAuth,
  checkRole,
};
