module.exports = function ErrorHandler(err, req, res, next) {
  console.log(err.message);
  res.status(400).json({ message: err.message ? err.message : err });
};
