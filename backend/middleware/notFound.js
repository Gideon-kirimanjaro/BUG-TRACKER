const notFound = (req, res) => {
  return res.status(400).send("route not found");
};
module.exports = { notFound };
