const express = require("express");
const router = express.Router();

const Followers = require("./followers.js");

router.post("/", (req, res, next) => {
  Followers.add(req.body)
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
});

router.delete("/", (req, res, next) => {
  Followers.remove(req.body)
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
});

router.get("/followers/:id", (req, res, next) => {
  const id = req.params.id;
  Followers.getFollowers(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
});

router.get("/following/:id", (req, res, next) => {
  const id = req.params.id;
  Followers.getFollows(id)
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
})

module.exports = router;
