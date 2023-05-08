module.exports = (...role) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!role.includes(userRole)) {
      return res.ststus(403).json({
        status: "fail",
        error: "Unauthorized access",
      });
    }
    next();
  };
};
