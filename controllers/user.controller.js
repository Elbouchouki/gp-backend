module.exports = {
  async index(req, res) {
    res.status(200).json({
      message: "users",
    });
  },
  async user(req, res) {
    res.status(200).json({
      message: "user",
    });
  },
};
