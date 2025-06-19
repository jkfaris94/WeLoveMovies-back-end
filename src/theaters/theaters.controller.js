const service = require("./theaters.service");

async function list(req, res) {
    console.log("Theaters route hit!");
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  list,
};