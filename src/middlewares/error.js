export default (err, req, res, _next) => {
  console.error(err);
  res
    .status(err.status)
    .json({ err: { code: err.code, message: err.message } });
};
