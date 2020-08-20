const myfavMovie = {
  title: "The Big Lebowski",
  duration: 160,
  stars: "The Dude, Walter, Donny",
};
const myImdb = function (movie) {
  console.log(
    movie.title +
      " " +
      "lasts for" +
      " " +
      movie.duration +
      "minutes." +
      " " +
      "Stars:" +
      movie.stars
  );
};
myImdb(myfavMovie);
