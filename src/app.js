const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = {
    id: uuid(),
    likes: 0,
    title,
    url,
    techs,
  };
  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs, likes } = request.body;
  const { id } = request.params;
  const repository = repositories.find((item) => item.id === id);

  if (repository === undefined) {
    return response.status(400).send();
  }

  Object.assign(repository, {
    title,
    url,
    techs,
    likes,
  });

  return response.status(200).json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
