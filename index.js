import express from "express";
const app = express();

app.use(express.json());

// app.get("/say.hello", (req, res) => {
//   return res.status(200).send("hello");
// });
let movieList = [];
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  movieList.push(newMovie);
  return res.status(200).send({ message: "movie is added successfully." });
});
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movie: movieList });
  //   console.log(movie);
});

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
