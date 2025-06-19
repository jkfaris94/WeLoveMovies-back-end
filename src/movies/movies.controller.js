const service = require("./movies.service");

async function list(req, res, next) {
  const { is_showing } = req.query;

  if (is_showing === "true") {
    const data = await service.listShowing();
    return res.json({ data });
  }

  const data = await service.list();
  res.json({ data });
}

async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  
  if (movie) {
    res.locals.movie = movie;
    return next();
  }

  next({ status: 404, error: `Movie ID not found: ${movieId}` });
}

function read(req, res) {
  res.json({ data: res.locals.movie });
}

async function listTheaters(req, res) {
  const { movieId } = req.params;
  const data = await service.listTheatersByMovie(movieId);
  res.json({ data });
}

module.exports = {
  list,
  read: [movieExists, read],
  listTheaters,
};
